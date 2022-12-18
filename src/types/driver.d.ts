export interface Driver {
  id: number;
  name: string;
  dorsal_number: number;
  birthday: string;
  country: string;
  picture: string;
}

interface RaceResults {
  driver_name: string;
  circuit_gp_name: string;
  race_position: number;
}
interface PolePositions {
  driver_name: string;
  circuit_gp_name: string;
  grid_position: number;
  grid_type_grid: string;
}
export interface BestResults {
  victories: Array<RaceResults>;
  podiums: Array<RaceResults>;
  polePositions: Array<PolePositions>;
}
