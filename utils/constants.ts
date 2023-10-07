import { CandidateOption, POLITICAL_PARTY } from "./interfaces"

export const defaultCandidate: CandidateOption = {
  logo: POLITICAL_PARTY.LIDERAZGO_Y_PROGRESO,
  number: 2
}

export enum GTM_EVENTS {
  GAME_START = 'game_start',
  GAME_SELECTION = 'game_selection',
  GAME_FINISH = 'game_finish',
  GAME_RESTART = 'game_restart',
  GAME_HELP = 'game_help'
}

export enum GAMES {
  RANDOM_SIMPLE_SOLO = 'random_simple_solo',
  RANDOM_SIMPLE_MULTIPLE = 'random_simple_multiple',
  RANDOM_FULL_SOLO = 'random_full_multiple',
  RANDOM_FULL_MULTIPLE = 'random_full_multiple'
}