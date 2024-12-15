import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule, CommonModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private router: Router) { }

  contactname: string = "";

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: false,
  }

  isMessageSent = false
  ischecked: boolean = false;


  mailTest = false;

  post = {
    endPoint: 'https://mehmet-deliaci.net/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.contactname = this.contactData.name
      this.sendMessage()
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log(response)
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  sendMessage() {
    this.isMessageSent = true;
    setTimeout(() => {
      this.isMessageSent = false;
    }, 6000);
  }

  closeMessage() {
    this.isMessageSent = false;
  }

  navigateAndScroll() {
    this.router.navigate(['/privacy-policy']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
