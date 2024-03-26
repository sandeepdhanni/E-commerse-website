import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent {
  generatedCaptcha: number | undefined;
  userInput: number | undefined;
  captchaResult: string = '';
  isCaptchaCorrect: boolean | undefined;

  constructor(private service:CustomerService){}

  generateCaptcha() {
    // Generate a random 4-digit numeric captcha
    const min = 1000; // Minimum 4-digit number (1000)
    const max = 9999; // Maximum 4-digit number (9999)
    this.generatedCaptcha = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  checkCaptcha() {
    if (this.userInput === this.generatedCaptcha) {
      this.captchaResult = 'Captcha is correct!';
      this.isCaptchaCorrect = true;
    } else {
      this.captchaResult = 'Captcha is incorrect. Please try again.';
      this.isCaptchaCorrect = false;
      // Regenerate a new captcha
      this.generateCaptcha();
    }
    this.service.setCaptchaCorrect(this.isCaptchaCorrect);
  }

  // Generate an initial captcha when the component is initialized
  ngOnInit() {
    this.generateCaptcha();
  }

  captchaBackgroundColor() {
    return this.isCaptchaCorrect ? 'green' : 'red';
  }
}
