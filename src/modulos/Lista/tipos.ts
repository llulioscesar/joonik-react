export interface ItemListaResult {
	image?: string;
	title: string;
	content: string;
	abrir?: boolean;
}

export interface IListaEstado {
	datos: ItemListaResult[];
}
