import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { rootReducer } from './reducers';
import { UserEffects } from './user/user.effects';

export const APP_IMPORTS = [
  EffectsModule.run(UserEffects),
  MaterialModule.forRoot(),
  ReactiveFormsModule,
  StoreModule.provideStore(rootReducer)
];

