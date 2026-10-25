# Pasar qfincas.com a la web nueva

Guía para el día en que qfincas.com deje de mostrar el WordPress y muestre esta web.

## Cómo está hoy (comprobado el 22-10-2026)

| Qué | Dónde |
| --- | --- |
| Dominio | Registrado en **Webempresa**. Caduca el **17-02-2027**: que el cliente confirme que se renueva solo. |
| DNS (la "agenda" del dominio) | En Webempresa (`ns3441.webempresa.eu` y `ns3442.webempresa.eu`) |
| Web antigua | WordPress en el hosting de Webempresa (`213.158.84.97`) |
| Correo | **Microsoft 365** (Outlook). No depende del hosting, pero sus registros DNS están en Webempresa. |

**Regla de oro:** solo se cambian **dos registros**, el de `qfincas.com` y el de `www`. El resto no se toca. Ahí están los registros del correo y, si se borran, Qfincas se queda sin email.

## Antes del día del cambio

- [ ] El cliente ha revisado la web y están resueltos los `PENDIENTE` del código. Como mínimo, el aviso legal y la privacidad deben tener sus datos reales: son obligatorios por ley.
- [ ] Quedar con el cliente para hacerlo juntos desde **su** cuenta de Webempresa. Así no hace falta que te pase la contraseña.
- [ ] En Webempresa, entrar en el **Editor de zona DNS**:
  - Hacer una **captura de pantalla de todos los registros**. Es el plan de vuelta atrás.
  - Bajar el **TTL** de los registros `qfincas.com` (A) y `www` (CNAME) a **300**, un día antes. Así, si hay que volver atrás, se nota en 5 minutos y no en horas.
- [ ] Descargar una **copia de seguridad completa del WordPress** desde Webempresa.
- [ ] En Netlify, ir a **Forms → Submission notifications** y añadir un aviso por email a `secretaria@qfincas.com`. Enviar un presupuesto de prueba y comprobar que llega.
- [ ] En Netlify, **apagar el distintivo "Powered by Netlify"**: Project configuration → General → Powered by Netlify badge. En el plan gratuito sale abajo a la derecha y, en el móvil, tapa el botón "Presupuesto" de la barra inferior. Se quita al momento, sin volver a desplegar.

## El día del cambio

1. **Netlify → Domain management → Add a domain.** Añadir `qfincas.com` y elegir DNS externo (no "Netlify DNS"). Añadir también `www.qfincas.com`.
   - Dominio principal: **`qfincas.com`, sin www**. Es como lo tiene Google ahora y como está configurada la web (`astro.config.mjs`).
2. **Webempresa → Editor de zona DNS.** Cambiar solo estos dos:

   | Registro | Tipo | Valor actual | Valor nuevo |
   | --- | --- | --- | --- |
   | `qfincas.com` | A | `213.158.84.97` | `75.2.60.5` |
   | `www.qfincas.com` | CNAME | `qfincas.com` | `qfincas-web.netlify.app` |

   Si hubiera un registro AAAA para `qfincas.com`, se borra. Hoy no hay ninguno.
3. **Netlify → Domain management → HTTPS.** Pulsar *Verify DNS configuration*. El certificado (el candado) se crea solo cuando el cambio llega, normalmente en menos de una hora.
4. **Netlify → Deploys → Trigger deploy → Clear cache and deploy site.** Este paso es **obligatorio**. Mientras la web no se vuelva a generar con qfincas.com como dominio principal, sigue diciéndole a Google que no la indexe.
5. **Comprobar:**
   - [ ] `npm run comprobar` sale "Todo bien". Revisa las 38 URLs antiguas y que la portada no tenga `noindex`.
   - [ ] `https://qfincas.com` y `https://www.qfincas.com` abren la web nueva con candado.
   - [ ] Un presupuesto de prueba llega a secretaría.
   - [ ] Un email enviado a `secretaria@qfincas.com` llega, y se puede responder.

**Si algo va mal:** volver a poner `213.158.84.97` en el registro A y `qfincas.com` en el CNAME de `www`. Con el TTL a 300 vuelve el WordPress en unos minutos.

## La primera semana

- [ ] **Google Search Console:** añadir la propiedad de tipo *Dominio* `qfincas.com`.
  - Se verifica añadiendo un registro TXT en Webempresa. Es un registro nuevo y no toca los demás.
  - Enviar el mapa del sitio: `https://qfincas.com/sitemap-index.xml`.
  - Pedir la indexación de la portada, Tarifas y Servicios con *Inspección de URLs*.
- [ ] **Perfil de Google (Maps):** comprobar que el enlace a la web es `https://qfincas.com/`.
- [ ] A las 2–4 semanas, revisar en Search Console → *Páginas* si aparece alguna URL antigua con error 404. Si aparece, añadirla a `public/_redirects` y a `scripts/urls-antiguas.txt`.

## Antes de cancelar el hosting de Webempresa

Conviene mantenerlo uno o dos meses sin tocar, por si hubiera que volver atrás.

**Cuidado:** los DNS del dominio, y con ellos el correo, viven en Webempresa. Antes de cancelar hay que elegir una de estas dos opciones:

- **A. Dejar el dominio y los DNS en Webempresa.** Hay que preguntar a su soporte, por escrito, si la zona DNS sigue activa sin el hosting.
- **B. Pasar los DNS a Netlify.** Antes de cambiar los servidores de nombres, hay que crear en Netlify DNS estos registros exactamente igual:

  | Tipo | Nombre | Valor |
  | --- | --- | --- |
  | MX (prioridad 0) | `qfincas.com` | `qfincas-com.mail.protection.outlook.com` |
  | TXT | `qfincas.com` | `v=spf1 include:spf.protection.outlook.com -all` |
  | TXT | `qfincas.com` | `MS=ms11611794` |
  | TXT | `_dmarc` | `v=DMARC1;p=none` |
  | CNAME | `autodiscover` | `autodiscover.outlook.com` |

  Además, comprobar en el centro de administración de Microsoft 365 (*Configuración → Dominios → qfincas.com*) que no falta ninguno.

Los registros `mail`, `webmail` y `ftp`, que apuntan al hosting antiguo, ya no hacen falta.

## Mejora recomendada para el correo

Microsoft 365 no tiene activada la firma **DKIM** para qfincas.com. Activarla ayuda a que los presupuestos que envía Qfincas no acaben en spam:

1. Se activa en Microsoft Defender, en *Email authentication settings → DKIM*.
2. Microsoft da dos registros CNAME (`selector1._domainkey` y `selector2._domainkey`), que se añaden en los DNS.
