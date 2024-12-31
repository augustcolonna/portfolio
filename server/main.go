package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/smtp"

	"github.com/jordan-wright/email"
)

type ContactForm struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5000") 
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS") 
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")      

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func sendEmailHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	var form ContactForm
	err := json.NewDecoder(r.Body).Decode(&form)
	if err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	e := email.NewEmail()
	e.From = fmt.Sprintf("%s <%s>", form.Name, form.Email)
	e.To = []string{"august.colonna@gmail.com"}
	e.Subject = fmt.Sprintf("%s Has contacted you from your website", form.Name)
	e.Text = []byte(fmt.Sprintf("Name: %s\nEmail: %s\nMessage: %s", form.Name, form.Email, form.Message))


	err = e.Send("smtp.gmail.com:587", smtp.PlainAuth("", "august.colonna@gmail.com", "nmvj utky crgs oree", "smtp.gmail.com"))
	if err != nil {
		log.Println("Error sending email:", err)
		http.Error(w, "Failed to send email", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Email sent successfully"))
}

func main() {
	http.Handle("/api/send-email", enableCORS(http.HandlerFunc(sendEmailHandler)))

	fmt.Println("Server is running on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
