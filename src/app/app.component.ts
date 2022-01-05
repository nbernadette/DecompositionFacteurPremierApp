import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'factprem';

  input: FormControl;
  primeNumbers: number[];
  stringToPrint: string;
  constructor(private formBuilder: FormBuilder){
    this.primeNumbers = [];
    this.input = formBuilder.control(0,[Validators.required]);
    this.stringToPrint = '';
  }

  submitNumber(){
    this.stringToPrint = ''
    var chiffre = this.input.value;
    console.log(chiffre);
    
    this.primeNumbers = this.getPrimeNumber(chiffre);

    if(this.primeNumbers.length >= 0){
      // Construire la chaine des nombres à afficher avec les signes de multiplication
      this.primeNumbers.forEach((value) => this.stringToPrint += value.toString() + '*');
      
      // Supprimer le dernier *
      this.stringToPrint = this.stringToPrint.substring(0,this.stringToPrint.length-1);
    }
  }

  getPrimeNumber(n: number): number[]{
    return [];
  }
}
