export interface IPokemon {
  name: string;
  id: number;
  sprites: { front_default: string; back_default: string; };
  types: { type: { name: string; url: string; } }[];
  stats: { base_stat: number; stat: { name: string; url: string; } }[]
}
