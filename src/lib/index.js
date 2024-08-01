import { writable } from 'svelte/store';

const HOST = 'http://localhost:5173';
const HOST_API = 'http://localhost:8080';

//const HOST_API = 'https://bn-api-production.up.railway.app';
//const HOST = 'https://notabaiana.com.br';

const SITE_NAME = 'Nota Baiana';
const IMG_PADRAO = HOST + '/notabaiana_400.jpg';

const formatarData = (data) => {
	const data_news = new Date(Date.parse(data));
	const dia = data_news.getDate().toString().padStart(2, '0');
	const mes = (data_news.getMonth() + 1).toString().padStart(2, '0');
	const ano = data_news.getFullYear();
	const hora = data_news.getHours().toString().padStart(2, '0');
	const minuto = data_news.getMinutes().toString().padStart(2, '0');
	const segundo = data_news.getSeconds().toString().padStart(2, '0');

	return `${dia}/${mes}/${ano} às ${hora}:${minuto}:${segundo}`;
};

const globalStore = writable({ isOpen: false });

export { SITE_NAME, formatarData, HOST_API, HOST, IMG_PADRAO, globalStore };
