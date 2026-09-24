import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as ArrowDownRight, t as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Chs18I44.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var blackfit_detalhes_default = "/assets/blackfit-detalhes-DZSOsGyK.jpg";
var blackfit_arara_default = "/assets/blackfit-arara-DlpOGmjm.jpg";
var blackfit_colecao_default = "/assets/blackfit-colecao-DFxM6DaQ.jpg";
var logo_beatriz_default = "/assets/logo-beatriz-DGO4F-JK.jpg";
var detailAsset = { url: blackfit_detalhes_default };
var rackAsset = { url: blackfit_arara_default };
var collectionAsset = { url: blackfit_colecao_default };
var logoAsset = { url: logo_beatriz_default };
var services = [
	"Marcas",
	"Projetos",
	"Eventos",
	"Aniversários",
	"Casamentos"
];
var marqueeItems = [
	"Marcas",
	"Projetos",
	"Eventos",
	"Aniversários",
	"Casamentos"
];
function InfinityBand({ reverse = false }) {
	const content = [...marqueeItems, ...marqueeItems];
	const trackRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const track = trackRef.current;
		if (!track) return;
		let frame = 0;
		const updatePosition = () => {
			frame = 0;
			const loopWidth = track.scrollWidth / 2;
			if (loopWidth <= 0) return;
			const distance = window.scrollY * .22 % loopWidth;
			const position = reverse ? distance - loopWidth : -distance;
			track.style.transform = `translate3d(${position}px, 0, 0)`;
		};
		const handleScroll = () => {
			if (frame === 0) frame = window.requestAnimationFrame(updatePosition);
		};
		updatePosition();
		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
			if (frame !== 0) window.cancelAnimationFrame(frame);
		};
	}, [reverse]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden border-y border-border py-4",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: trackRef,
			className: "marquee-track",
			children: content.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex shrink-0 items-center gap-8 font-display text-3xl italic md:text-5xl",
				children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-foreground" })]
			}, `${item}-${index}`))
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-hidden bg-background text-foreground selection:bg-accent",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex h-20 max-w-[1600px] items-center justify-between px-5 md:px-10",
					"aria-label": "Navegação principal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#inicio",
						className: "flex flex-col leading-none",
						"aria-label": "Beatriz Silva, início",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logoAsset.url,
							alt: "Beatriz Silva Storymaker",
							className: "h-12 w-auto object-contain object-left"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.16em] md:gap-9",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "transition-opacity hover:opacity-50",
								href: "#portfolio",
								children: "Trabalhos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "hidden transition-opacity hover:opacity-50 sm:block",
								href: "#servicos",
								children: "Serviços"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "transition-opacity hover:opacity-50",
								href: "#contato",
								children: "Contato"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "inicio",
					className: "relative flex min-h-[92svh] flex-col justify-end px-5 pb-16 pt-32 md:px-10 md:pb-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "pointer-events-none absolute -right-10 top-16 select-none font-display text-[48vw] leading-none text-accent/45 md:right-0 md:text-[34vw]",
						children: "BS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 max-w-5xl animate-reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-7 text-[10px] font-semibold uppercase tracking-[0.32em]",
								children: "Registros audiovisuais"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-[clamp(4.5rem,11vw,10rem)] leading-[0.78]",
								children: [
									"Eu registro.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Você vive." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-md text-base leading-relaxed text-muted-foreground md:text-lg",
									children: "Transformo momentos em histórias que você vai querer reviver."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#portfolio",
									className: "group inline-flex items-center gap-3 border-b border-foreground pb-2 text-xs font-semibold uppercase tracking-[0.18em]",
									children: ["Ver meu trabalho ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { className: "size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" })]
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfinityBand, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "portfolio",
					className: "px-5 py-24 md:px-10 md:py-36",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-14 flex flex-col gap-4 border-b border-border pb-5 md:flex-row md:items-end md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[10px] font-bold uppercase tracking-[0.28em]",
							children: "Trabalho selecionado / 01"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl italic md:text-4xl",
								children: "Black Fit × Girls Movement Club"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
								children: "20 de setembro"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 items-start gap-6 md:grid-cols-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "md:col-span-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: detailAsset.url,
								alt: "Bolsa Black Fit com detalhes artesanais no evento",
								className: "aspect-[2/3] w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "mt-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
								children: "Detalhes / atmosfera / presença"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-20 md:col-span-4 md:col-start-9 md:pt-40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: rackAsset.url,
									alt: "Bolsa e coleção Black Fit expostas em arara",
									className: "aspect-[2/3] w-full object-cover"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "max-w-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-4xl italic",
										children: "O detalhe também conta a história."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-sm leading-relaxed text-muted-foreground",
										children: "Um olhar atento para a atmosfera, a identidade e tudo o que faz um momento ser único."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
									className: "md:-ml-24",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: collectionAsset.url,
										alt: "Coleção Black Fit no evento com Girls Movement Club",
										className: "aspect-[2/3] w-full object-cover"
									})
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfinityBand, { reverse: true }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "servicos",
					className: "bg-surface px-5 py-24 md:px-10 md:py-36",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:sticky md:top-36 md:h-fit",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-6 text-[10px] font-bold uppercase tracking-[0.28em]",
									children: "O que eu registro"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "max-w-lg font-display text-6xl italic leading-none md:text-8xl",
									children: "Histórias com verdade."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 max-w-md leading-relaxed text-muted-foreground",
									children: "Cada trabalho nasce da escuta e de um olhar presente, para que a experiência continue viva depois que termina."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: services.map((title, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex items-end justify-between gap-6 border-b border-accent py-10 first:pt-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-4xl italic md:text-5xl",
								children: title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pb-1 text-[10px] font-semibold text-muted-foreground",
								children: String(index + 1).padStart(2, "0")
							})]
						}, title)) })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfinityBand, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-5 py-24 text-center md:py-40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-16 text-[10px] font-bold uppercase tracking-[0.32em]",
							children: "Como funciona"
						}), [
							"Você me conta",
							"A gente planeja",
							"Eu registro",
							"Você revive"
						].map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center",
							children: [index > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "my-6 h-12 w-px bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-4xl italic",
								children: step
							})]
						}, step))]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfinityBand, { reverse: true })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				id: "contato",
				className: "bg-foreground px-5 py-24 text-background md:px-10 md:py-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-8 text-[10px] font-semibold uppercase tracking-[0.3em] opacity-60",
							children: "Tem uma história para registrar?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://wa.me/5513991508431",
							target: "_blank",
							rel: "noreferrer",
							className: "group inline-flex items-center gap-3 font-display text-[clamp(3rem,8vw,7.5rem)] italic leading-none",
							children: ["Vamos conversar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-[0.55em] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-24 flex flex-col items-center justify-between gap-6 border-t border-background/15 pt-8 text-[10px] uppercase tracking-[0.18em] md:flex-row",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Beatriz Silva — Storymaker" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://www.instagram.com/beatrizsmobile?stkn=d3ZmbHdyMDBndjA=",
										target: "_blank",
										rel: "noreferrer",
										className: "transition-opacity hover:opacity-50",
										children: "Instagram"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://wa.me/5513991508431",
										target: "_blank",
										rel: "noreferrer",
										className: "transition-opacity hover:opacity-50",
										children: "WhatsApp"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026" })
							]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
