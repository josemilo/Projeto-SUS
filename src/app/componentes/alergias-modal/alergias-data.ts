export interface AlergiaItem {
  nome: string;
  marcado: boolean;
}

export interface CategoriaAlergia {
  id: string;
  titulo: string;
  icone: string;
  itens: AlergiaItem[];
}

export const ALERGIAS_DATA: CategoriaAlergia[] = [
  {
    id: 'alimentar',
    titulo: 'Alimentar',
    icone: 'nutrition',
    itens: [
      { nome: 'Leite e derivados', marcado: false },
      { nome: 'Ovos', marcado: false },
      { nome: 'Trigo (Glúten)', marcado: false },
      { nome: 'Soja', marcado: false },
      { nome: 'Amendoim', marcado: false },
      { nome: 'Castanhas e nozes', marcado: false },
      { nome: 'Peixes', marcado: false },
      { nome: 'Crustáceos (camarão, caranguejo)', marcado: false },
      { nome: 'Milho', marcado: false },
      { nome: 'Frutas cítricas', marcado: false }
    ]
  },
  {
    id: 'animais',
    titulo: 'Animais (Insetos/Outros)',
    icone: 'bug',
    itens: [
      { nome: 'Picada de Abelha', marcado: false },
      { nome: 'Picada de Vespa', marcado: false },
      { nome: 'Picada de Formiga', marcado: false },
      { nome: 'Pêlo de Gato', marcado: false },
      { nome: 'Pêlo de Cachorro', marcado: false },
      { nome: 'Ácaros', marcado: false },
      { nome: 'Baratas', marcado: false },
      { nome: 'Lã', marcado: false },
      { nome: 'Penas', marcado: false },
      { nome: 'Saliva de animais', marcado: false }
    ]
  },
  {
    id: 'medicamentos',
    titulo: 'Medicamentos',
    icone: 'medkit',
    itens: [
      { nome: 'Penicilina', marcado: false },
      { nome: 'Aspirina (AAS)', marcado: false },
      { nome: 'Ibuprofeno', marcado: false },
      { nome: 'Dipirona', marcado: false },
      { nome: 'Sulfas', marcado: false },
      { nome: 'Anestésicos locais', marcado: false },
      { nome: 'Contraste iodado', marcado: false },
      { nome: 'Insulina', marcado: false },
      { nome: 'Anticonvulsivantes', marcado: false },
      { nome: 'Quimioterápicos', marcado: false }
    ]
  },
   {
    id: 'ambientais',
    titulo: 'Ambientais',
    icone: 'flower',
    itens: [
      { nome: 'Pólen', marcado: false },
      { nome: 'Mofo/Fungos', marcado: false },
      { nome: 'Poeira', marcado: false },
      { nome: 'Látex', marcado: false },
      { nome: 'Perfumes fortes', marcado: false },
      { nome: 'Fumaça de cigarro', marcado: false },
      { nome: 'Poluição', marcado: false },
      { nome: 'Cloro', marcado: false },
      { nome: 'Produtos de limpeza', marcado: false },
      { nome: 'Metais (Níquel, etc.)', marcado: false }
    ]
  }
];