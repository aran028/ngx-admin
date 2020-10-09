import { Especialista } from "./especialista";

export interface Consentimiento {
  id: number;
  paciente: number;
  especialista: Especialista;
  especialidad: number;
  especialidad_nombre: string;
  procedimiento: number;
  firma_paciente: string;
  firma_representante: string;
  firma_especialista: string;
  firma_revocado: string;
  hash_fpaciente: string;
  hash_frepresentante: string;
  hash_fespecialista: string;
  hash_frevocado: string;
  estado: number;
  fecha_creacion: Date;
  firma_casa: number;
  path: string;
}
