const initRecaptcha = async () => {
	(function () {
		var w = window,
			C = '___grecaptcha_cfg',
			cfg = (w[C] = w[C] || {}),
			N = 'grecaptcha';
		var gr = (w[N] = w[N] || {});
		gr.ready =
			gr.ready ||
			function (f) {
				(cfg['fns'] = cfg['fns'] || []).push(f);
			};
		w['__recaptcha_api'] = 'https://www.google.com/recaptcha/api2/';
		(cfg['render'] = cfg['render'] || []).push('onload');
		w['__google_recaptcha_client'] = true;
		var d = document,
			po = d.createElement('script');
		po.type = 'text/javascript';
		po.async = true;
		po.charset = 'utf-8';
		var v = w.navigator,
			m = d.createElement('meta');
		m.httpEquiv = 'origin-trial';
		m.content =
			'A/kargTFyk8MR5ueravczef/wIlTkbVk1qXQesp39nV+xNECPdLBVeYffxrM8TmZT6RArWGQVCJ0LRivD7glcAUAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZzIiLCJleHBpcnkiOjE3NDIzNDIzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9';
		if (v && v.cookieDeprecationLabel) {
			v.cookieDeprecationLabel.getValue().then(function (l) {
				if (l !== 'treatment_1.1' && l !== 'treatment_1.2' && l !== 'control_1.1') {
					d.head.prepend(m);
				}
			});
		} else {
			d.head.prepend(m);
		}
		po.src =
			'https://www.gstatic.com/recaptcha/releases/hfUfsXWZFeg83qqxrK27GB8P/recaptcha__pt_br.js';
		po.crossOrigin = 'anonymous';
		po.integrity = 'sha384-nWbc4uEImIfEMNk1C6/Zp73d6qjwnQSEJeNJhTGOYt0NoRWul7yWr2GGT7nTJ7sv';
		var e = d.querySelector('script[nonce]'),
			n = e && (e['nonce'] || e.getAttribute('nonce'));
		if (n) {
			po.setAttribute('nonce', n);
		}
		var s = d.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(po, s);
	})();
};

const setKey = (e) => {
	const keyadmin = e.target.value;
	localStorage.setItem('key_admin', keyadmin);
};

const getKey = () => {
	return localStorage.getItem('key_admin');
};

//Chave para produção
const KEY_RECAPTCHA = import.meta.env.VITE_GOOGLE_CAPTCHA;

export { initRecaptcha, KEY_RECAPTCHA, setKey, getKey };
