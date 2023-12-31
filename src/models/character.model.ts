export interface CharacterData {
  results: CharacterResult[];
}

export interface CharacterResult {
  id: string;
  name: string;
  gender: string;
  status: string;
  image: string;
}
