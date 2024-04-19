// place files you want to import through the `$lib` alias in this folder.
const SITE_NAME = 'Notícias Brasil';

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

export { SITE_NAME, formatarData };
