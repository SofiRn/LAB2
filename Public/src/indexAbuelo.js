import * as components from './components/indexPadre.js';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
		<link rel="stylesheet" href="./src/components/cardBanner/cardBanner.css">
		<link rel="stylesheet" href="./src/components/cardFeatured/cardFeatured.css">
		<link rel="stylesheet" href="./src/components/cardBanner2/cardBanner2.css">
		<section class="banner1">

    <card-banner image="https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_1500/ncom/en_US/merchandising/center-stage-stories/2024/02-February/Mario-vs-Donkey-Kong/3600x1300___Mario_Vs_Donkey_Kong_KeyArt_Centerstage_Desktop"
		 H1Text="¡Una clásica rivalidad ha regresado!"
		  button="Disponible ya" ></card-banner>
			</section>

		<section>
		<h1>Destacados</h1>
		</section>

		<section class="cardfeatured">
		<card-featured
			image="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000005022/cd94b037b282fc3415f980bb31e41de61200235dfc7b1532ffc512280fed0bb1"
			H3Text="Princess Peach Showtime!"
		 	tag="Reserva ya"
			price=""
			pText="Nintendo Switch"
			heart=""
			 ></card-featured>

			 <card-featured image="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000005022/cd94b037b282fc3415f980bb31e41de61200235dfc7b1532ffc512280fed0bb1"
			 H3Text="Princess Peach Showtime!"
				 tag="Reserva ya"
				price=""
				pText="Nintendo Switch"
				heart=""
				 ></card-featured>

				 <card-featured image="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000005022/cd94b037b282fc3415f980bb31e41de61200235dfc7b1532ffc512280fed0bb1"
				 H3Text="Princess Peach Showtime!"
					 tag="Reserva ya"
					price=""
					pText="Nintendo Switch"
					heart=""
					 ></card-featured>

					 <card-featured image="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000005022/cd94b037b282fc3415f980bb31e41de61200235dfc7b1532ffc512280fed0bb1"
					 H3Text="Princess Peach Showtime!"
						 tag="Reserva ya"
						price=""
						pText="Nintendo Switch"
						heart=""
						 ></card-featured>

			<card-featured image="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000005022/cd94b037b282fc3415f980bb31e41de61200235dfc7b1532ffc512280fed0bb1"
			 H3Text="Princess Peach Showtime!"
				 tag="Reserva ya"
				price=""
				pText="Nintendo Switch"
				heart=""
				 ></card-featured>
				 </section>

			<section>
    <card-banner2
		tittle="Tienda de juegos"
		image="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_1200/ncom/es_LA/merchandising/homepage-banners/4576x744_LATAM_GameStoreBanner_01_SP"
		 H3Text="¡Compra, descarga y juega de inmediato!"
		  button="Comprar juegos" ></card-banner2>

			<card-banner2
		tittle="Explora las consolas de videojuegos"
		image="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_1200/ncom/en_US/switch/site-design-update/switch-family-es"
		 H3Text="Familia Nintendo Switch"
		  button="Más detalles" ></card-banner2>
			</section>

			<section>
		<h1>Novedades</h1>
		</section>

			<section>
			<card-news
			image="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_800/ncom/en_US/articles/2024/side-order-the-new-splatoon-3-single-player-campaign-dlc-is-available-now/1920x1080_Splatoon3_SideOrder_SP"
			date="22/02/24"
			H4Text="Contenido descargable de Splatoon 3: ¡Ya está disponible la nueva y cheverisima campaña para un solo jugador"
			pText="Damas y calameros, nos sentimos orgullosos de anunciar que ya puedes ordenar (porque ya está disponible) el contenido descargable* del juego Splatoon™ 3: La cara del orden. Esta segunda ol..."
			more="Leer más"
			></card-news>

			<card-news
			image="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_800/ncom/en_US/articles/2024/feb-update-see-what-games-were-added-to-the-nintendo-64-super-nes-and-nes-collections/2250x1266_NSO_SP"
			date="21/02/24"
			H4Text="¡Novedades de febrero! Mira los juegos que se agregaron a los catalogos de Nintendo 64, Super NES y NES"
			pText="¿Quieres disfrutar algunos juegos clásicos? Los suscriptores de Nintendo Switch Online obtienen acceso instantáneo a un gran catálogo de juegos de Game Boy™, Super NES™ y NES™. Por su..."
			more="Leer más"
			></card-news>
			</section>

			<section>
			<card-news
			image="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_800/ncom/en_US/articles/2024/side-order-the-new-splatoon-3-single-player-campaign-dlc-is-available-now/1920x1080_Splatoon3_SideOrder_SP"
			date="19/02/24"
			H4Text="Pon a prueba el nuevo juego de muestra, EA SPORTS FC 24"
			pText=""
			more="Leer más"
			></card-news>

			<card-news
			image="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_800/ncom/en_US/articles/2024/side-order-the-new-splatoon-3-single-player-campaign-dlc-is-available-now/1920x1080_Splatoon3_SideOrder_SP"
			date="16/02/24"
			H4Text="¡Una clásica rivalidad ha regresado en el juego Mario vs. Donkey Kong"
			pText=""
			more="Leer más"
			></card-news>


			<card-news
			image="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_800/ncom/en_US/articles/2024/side-order-the-new-splatoon-3-single-player-campaign-dlc-is-available-now/1920x1080_Splatoon3_SideOrder_SP"
			date="1/02/24"
			H4Text="¡Los elementos icónicos inspirados en el juego Mario vs. Donkey Kong están aquí por tiempo limitado!"
			pText=""
			more="Leer más"
			></card-news>

			<card-news
			image="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_800/ncom/en_US/articles/2024/side-order-the-new-splatoon-3-single-player-campaign-dlc-is-available-now/1920x1080_Splatoon3_SideOrder_SP"
			date="1/02/24"
			H4Text="Descubre las aventuras originales de Lara Croft en Tomb Raider I-III Remastered"
			pText=""
			more="Leer más"
			></card-news>
			</section>

			<section>
		<h1>Los más vendidos de Nintendo Switch</h1>
		<p>Ver la lista completa</p>
		</section>

		<section>
			<card-featured image="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000005022/cd94b037b282fc3415f980bb31e41de61200235dfc7b1532ffc512280fed0bb1"
		 H3Text="Overcooked! 2"
		 	tag="La oferta termina en: 16 días"
			price="$15.975,00"
			pText="Nintendo Switch"
			heart="" ></card-featured>

			<card-featured image="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000005022/cd94b037b282fc3415f980bb31e41de61200235dfc7b1532ffc512280fed0bb1"
		 H3Text="Overcooked! 2"
		 	tag="La oferta termina en: 16 días"
			price="$15.975,00"
			pText="Nintendo Switch"
			heart="" ></card-featured>

			<card-featured image="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000005022/cd94b037b282fc3415f980bb31e41de61200235dfc7b1532ffc512280fed0bb1"
		 H3Text="Overcooked! 2"
		 	tag="La oferta termina en: 16 días"
			price="$15.975,00"
			pText="Nintendo Switch"
			heart="" ></card-featured>

			<card-featured image="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000005022/cd94b037b282fc3415f980bb31e41de61200235dfc7b1532ffc512280fed0bb1"
		 H3Text="Overcooked! 2"
		 	tag="La oferta termina en: 16 días"
			price="$15.975,00"
			pText="Nintendo Switch"
			heart="" ></card-featured>

			<card-featured image="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000005022/cd94b037b282fc3415f980bb31e41de61200235dfc7b1532ffc512280fed0bb1"
		 H3Text="Overcooked! 2"
		 	tag="La oferta termina en: 16 días"
			price="$15.975,00"
			pText="Nintendo Switch"
			heart="" ></card-featured>
			</section>

			<section>
		<h1>Nuevos lanzamientos de Nintendo Switch</h1>
		</section>

		<section>
			<card-featured image="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000005022/cd94b037b282fc3415f980bb31e41de61200235dfc7b1532ffc512280fed0bb1"
		 H3Text="Mario vs. Donkey Kong"
		 	tag="¡Nuevo!"
			 price="$273.800,00"
			pText="Nintendo Switch"
			heart=""
			></card-featured>

			<card-featured image="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000005022/cd94b037b282fc3415f980bb31e41de61200235dfc7b1532ffc512280fed0bb1"
		 H3Text="Overcooked! 2"
		 	tag="La oferta termina en: 16 días"
			price="$15.975,00"
			pText="Nintendo Switch"
			heart="" ></card-featured>

			<card-featured image="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000005022/cd94b037b282fc3415f980bb31e41de61200235dfc7b1532ffc512280fed0bb1"
		 H3Text="Overcooked! 2"
		 	tag="La oferta termina en: 16 días"
			price="$15.975,00"
			pText="Nintendo Switch"
			heart="" ></card-featured>

			<card-featured image="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000005022/cd94b037b282fc3415f980bb31e41de61200235dfc7b1532ffc512280fed0bb1"
		 H3Text="Overcooked! 2"
		 	tag="La oferta termina en: 16 días"
			price="$15.975,00"
			pText="Nintendo Switch"
			heart="" ></card-featured>

			<card-featured image="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000005022/cd94b037b282fc3415f980bb31e41de61200235dfc7b1532ffc512280fed0bb1"
		 H3Text="Overcooked! 2"
		 	tag="La oferta termina en: 16 días"
			price="$15.975,00"
			pText="Nintendo Switch"
			heart="" ></card-featured>
			</section>

    `;
	}
}

customElements.define('app-container', AppContainer);
