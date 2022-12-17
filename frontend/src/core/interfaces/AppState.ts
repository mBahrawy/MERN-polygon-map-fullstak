import { MapState } from '@/core/interfaces/Map';
import { AuthState } from '@/core/interfaces/Auth';

export interface AppState {
  map: MapState
  auth: AuthState
}