import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        LoginComponent 
      ], imports: [
          BrowserModule,
          FormsModule,
          ReactiveFormsModule
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(LoginComponent);

      component = fixture.componentInstance; // LoginComponent test instance

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
}));


  // it(`should have as text 'login page'`, async(() => {
  //   expect(component.text).toEqual('login page');
  // }));

  // it(`should set submitted to true`, async(() => {
  //   component.onSubmit();
  //   expect(component.submitted).toBeTruthy();
  // }));

  // it(`should call the onSubmit method`, async(() => {
  //   fixture.detectChanges();
  //   spyOn('component', onSubmit);
  //   el = fixture.debugElement.query(By.css('button')).nativeElement;
  //   el.click();
  //   expect(component.onSubmit).toHaveBeenCalledTimes(0);
  // }));

  // it(`form should be invalid`, async(() => {
  //   component.loginForm.controls['email'].setValue('');
  //   component.loginForm.controls['name'].setValue('');
  //   component.loginForm.controls['text'].setValue('');
  //   expect(component.loginForm.valid).toBeFalsy();
  // }));

  // it(`form should be valid`, async(() => {
  //   component.loginForm.controls['email'].setValue('asd@asd.com');
  //   component.loginForm.controls['name'].setValue('aada');
  //   component.loginForm.controls['text'].setValue('text');
  //   expect(component.loginForm.valid).toBeTruthy();
  // }));





  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
