import { atom } from 'recoil';
export interface Character {
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
}
export const charactersAtom = atom<Character[]>({
    key: 'characters',
    default: [],
});