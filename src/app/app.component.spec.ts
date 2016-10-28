/* tslint:disable: max-line-length */
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NotFound404Component } from './not-found404.component';

import 'rxjs/add/operator/takeUntil';

describe('App Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot(),
        ReactiveFormsModule
        ],
      providers: [],
      declarations: [AppComponent, NotFound404Component]
    });
  });

  it('should contain Dashboard text', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement).not.toContainText('Welcome to the Dashboard');
  }));

});
