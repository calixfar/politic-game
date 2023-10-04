export enum POLITICAL_PARTY {
  ASI = 'asi',
  CENTRO_DEMOCRATICO = 'centro-democratico',
  COLOMBIA_JUSTA_LIBRE = 'colombia-justa-libre',
  OXIGENO = 'oxigeno',
  VERDE = 'verde',
  LIDERAZGO_Y_PROGRESO = 'liderazgo-y-progreso'
}

export interface CandidateOption {
  logo: POLITICAL_PARTY
  number: number
}