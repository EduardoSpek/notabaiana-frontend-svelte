import { writable } from "svelte/store";

const HOST_API = import.meta.env.VITE_HOST_API;
const HOST = import.meta.env.VITE_HOST;

const SITE_NAME = "Nota Baiana";
const IMG_PADRAO = `${HOST}/notabaiana_400.jpg`;

const formatarData = (data) => {
	const data_news = new Date(Date.parse(data));
	const dia = data_news.getDate().toString().padStart(2, "0");
	const mes = (data_news.getMonth() + 1).toString().padStart(2, "0");
	const ano = data_news.getFullYear();
	const hora = data_news.getHours().toString().padStart(2, "0");
	const minuto = data_news.getMinutes().toString().padStart(2, "0");
	const segundo = data_news.getSeconds().toString().padStart(2, "0");

	return `${dia}/${mes}/${ano} às ${hora}:${minuto}:${segundo}`;
};

const bigFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

const globalStore = writable({ isOpen: false, listNewsExpand: true });

export {
	SITE_NAME,
	formatarData,
	HOST_API,
	HOST,
	IMG_PADRAO,
	globalStore,
	bigFirstLetter,
};
