(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function i(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(t){if(t.ep)return;t.ep=!0;const c=i(t);fetch(t.href,c)}})();const p="martin@aimarketingbox.org",G="Martin Zialcita",M="aimb-creations-onboarding-v2",l={elizabeth:{name:"Elizabeth Remis",email:"elizabeth@creationsmedspa.com",title:"President"},stephanie:{name:"Stephanie Hatfield",email:"management@creationsmedspa.com",title:"Management"},sharon:{name:"Sharon Otaguro",email:"hi@sharonotaguro.com",title:"Spa consultant"}},K=1800,$="2026-09-11";function C(e=$){const[n,i,o]=e.split("-").map(Number);return!n||!i||!o?e:`${i}/${o}/${String(n).slice(-2)}`}const A=[{key:"wordpress",label:"WordPress",hint:"Invite martin@aimarketingbox.org as Editor. Name the editor account in notes — never paste a password."},{key:"hosting",label:"Hosting panel",hint:"Only if hosting is separate from WordPress. Invite access, or mark not applicable."},{key:"gbp",label:"Google Business Profile",hint:"Invite as a manager on the Lutz listing."},{key:"ga4",label:"Google Analytics 4",hint:"Admin or editor access."},{key:"gsc",label:"Google Search Console",hint:"Owner or full user on the property that covers creationsmedspa.com."},{key:"googleAds",label:"Google Ads",hint:"Admin access so we can run and pause campaigns. Do not send passwords."},{key:"meta",label:"Meta Business",hint:"Business Manager admin, plus the Facebook Page and Instagram."},{key:"youtube",label:"YouTube",hint:"Brand account or channel manager, if one exists."},{key:"ghl",label:"GoHighLevel / Nexus One",hint:"Note who owns the account. Invite an agency user — do not share the login password."},{key:"booking",label:"Booking system",hint:"Meevo or other. Confirm the live patient book path in notes."},{key:"instagram",label:"Instagram",hint:"Invite through Meta Business. Canonical professional account only."},{key:"facebook",label:"Facebook Page",hint:"One canonical page. Put the URL in notes."},{key:"linkedin",label:"LinkedIn",hint:"Company page admin, if claimed."},{key:"yelp",label:"Yelp",hint:"Only if the listing is claimed."},{key:"wellnessliving",label:"WellnessLiving",hint:"Mark not applicable if you do not use it."},{key:"callTracking",label:"Call tracking",hint:"Mark not applicable if you do not use a tracking number or call software."}];function Z(){const e={};for(const n of A)e[n.key]={status:"",byDate:"",notes:""};return e}function O(){return{savedAt:"",submittedAt:"",currentStep:0,completed:!1,businessName:"Creations Med Aesthetics & Wellness Spa",website:"https://creationsmedspa.com/",address:"1535 N Dale Mabry Hwy, Lutz, FL 33548",phone:"813-809-2229",email:"Info@CreationsMedSpa.com",publicHours:"",seasonalHours:"",bookingUrl:"https://creationsmedspa.com/reserve-now/",bookingUrlNotes:"",engagementStart:$,presidentName:l.elizabeth.name,presidentTitle:l.elizabeth.title,presidentEmail:l.elizabeth.email,presidentIsDecisionMaker:!0,medicalDirectorName:"Anisha Singh",medicalDirectorLicense:"ME171283",sharonName:l.sharon.name,sharonRole:l.sharon.title,sharonEmail:l.sharon.email,sharonOnWeeklyCalls:!0,sharonOnApprovals:!0,dayToDayName:l.stephanie.name,dayToDayRole:l.stephanie.title,dayToDayEmail:l.stephanie.email,dayToDayPhone:"",frontDeskName:"",frontDeskRole:"Front desk / operations",frontDeskEmail:"",clinicalSignoff:"",approvalChannel:"",copyTurnaround:"1 business day",creativeTurnaround:"2 business days for creative with faces or clinical claims",weeklyRhythmConfirm:!0,weeklyRhythmNotes:"",callAttendees:["sharon","dayToDay"],callAttendeesOther:"",winLooksLike:"",priorityServices:[],otherPriorityService:"",averageTicket:"",consultCloseRate:"",rebookRate:"",healthyMarginOffers:"",lossLeaderOffers:"",capacityDaysRooms:"",cannotTakeMore:"",bookingMethods:[],otherBookingMethod:"",currentSpeedToLead:"",acceptSpeedToLead:!0,customSpeedToLead:"",afterConsult:"",membershipExists:"",membershipPrice:"",membershipEligible:"",askReviews:"",reviewsWhen:"",gtkOfferLive:"",firstVisitCardLive:"",priorityEntryOffer:"",treatmentMenuLink:"",treatmentMenuNotes:"",bannedClaims:"",whoOnCamera:"",medicalDirectorDisclosure:"Anisha Singh, M.D., Medical Director. Florida license ME171283. Care is provided at Creations Med Aesthetics & Wellness Spa in Lutz, Florida.",access:Z(),ghlOwner:"",bookingSystemName:"",liveBookPath:"https://creationsmedspa.com/reserve-now/",facebookPageUrl:"",cannotInviteNotes:"",mediaSpendConfirm:"",mediaSpendNotes:"",brandGuidelinesLink:"",brandGuidelinesNone:!1,assetLocation:"",photoRelease:"",linesWillNotSay:"",pastAdsNotes:"",pastAdsLinks:"",acknowledgement:!1}}const R=[{id:"business",label:"Business",title:"Confirm the business"},{id:"people",label:"People",title:"People and approvals"},{id:"outcomes",label:"Outcomes",title:"90-day outcome and economics"},{id:"journey",label:"Journey",title:"Patient journey"},{id:"offers",label:"Offers",title:"Offers and clinical guardrails"},{id:"access",label:"Access",title:"Access checklist"},{id:"brand",label:"Brand",title:"Brand and proof"},{id:"review",label:"Review",title:"Review and submit"}],j=[{id:"injectables",label:"Injectables"},{id:"neogen",label:"NeoGen"},{id:"glp",label:"Weight / GLP"},{id:"massage",label:"Massage"},{id:"membership",label:"Membership"},{id:"other",label:"Other"}],Q=[{id:"call",label:"Phone call"},{id:"text",label:"Text message"},{id:"form",label:"Website form"},{id:"instagram",label:"Instagram DM"},{id:"other",label:"Other"}],H=[{id:"elizabeth",label:l.elizabeth.name},{id:"sharon",label:l.sharon.name,locked:!0},{id:"anisha",label:"Anisha Singh, M.D."},{id:"dayToDay",label:`${l.stephanie.name} (management)`},{id:"frontDesk",label:"Front desk / operations"},{id:"other",label:"Someone else"}];function X(e){var t,c,m,u;const n=O();if(!e||typeof e!="object")return n;const i=e,o={...n,...i,access:{...n.access,...i.access??{}},callAttendees:Array.isArray(i.callAttendees)?Array.from(new Set(["sharon",...i.callAttendees])):n.callAttendees,priorityServices:Array.isArray(i.priorityServices)?i.priorityServices:n.priorityServices,bookingMethods:Array.isArray(i.bookingMethods)?i.bookingMethods:n.bookingMethods,sharonRole:"Spa consultant",sharonOnWeeklyCalls:!0,sharonOnApprovals:!0};o.presidentEmail.trim()||(o.presidentEmail=l.elizabeth.email),o.sharonEmail.trim()||(o.sharonEmail=l.sharon.email),(!o.sharonName.trim()||o.sharonName==="Sharon")&&(o.sharonName=l.sharon.name),o.dayToDayName.trim()||(o.dayToDayName=l.stephanie.name),o.dayToDayEmail.trim()||(o.dayToDayEmail=l.stephanie.email),o.dayToDayRole.trim()||(o.dayToDayRole=l.stephanie.title),(t=o.engagementStart)!=null&&t.trim()||(o.engagementStart=$);for(const v of Object.keys(n.access))o.access[v]={status:((c=o.access[v])==null?void 0:c.status)??"",byDate:((m=o.access[v])==null?void 0:m.byDate)??"",notes:((u=o.access[v])==null?void 0:u.notes)??""};return o}function ee(){try{const e=localStorage.getItem(M);return e?X(JSON.parse(e)):O()}catch{return O()}}function ne(e){const n={...e,sharonRole:"Spa consultant",sharonOnWeeklyCalls:!0,sharonOnApprovals:!0,callAttendees:Array.from(new Set(["sharon",...e.callAttendees])),savedAt:new Date().toISOString()};return localStorage.setItem(M,JSON.stringify(n)),n}function oe(){return localStorage.removeItem(M),O()}function z(e,n){const i=[],o=(t,c)=>{t||i.push(c)};if(e===0&&(o(n.businessName.trim().length>1,"Confirm the legal or public business name."),o(n.website.trim().length>5,"Confirm the website."),o(n.address.trim().length>8,"Confirm the street address."),o(n.phone.trim().length>6,"Confirm the public phone number."),o(n.email.trim().includes("@"),"Confirm the public email."),o(n.publicHours.trim().length>8,"Enter current public hours. We do not have these on file and will not invent them."),o(n.bookingUrl.trim().length>5,"Confirm or correct the live booking URL."),o(!!n.engagementStart,"Confirm the 90-day engagement start date.")),e===1&&(o(n.presidentName.trim().length>1,"Confirm Elizabeth as President."),o(n.presidentIsDecisionMaker,"Confirm Elizabeth as the decision-maker for this engagement."),o(n.presidentEmail.trim().includes("@"),"Confirm Elizabeth Remis’s email for approvals."),o(n.medicalDirectorName.trim().length>1,"Confirm the medical director."),o(n.sharonEmail.trim().includes("@"),"Sharon Otaguro’s email is required. She stays on this engagement."),o(n.sharonOnWeeklyCalls,"Sharon Otaguro must remain on weekly calls."),o(n.sharonOnApprovals,"Sharon Otaguro must remain on approvals."),o(n.dayToDayName.trim().length>1,"Confirm Stephanie Hatfield as the day-to-day management contact, or correct the name."),o(n.dayToDayEmail.trim().includes("@"),"Confirm the management email (management@creationsmedspa.com), or correct it."),o(n.frontDeskName.trim().length>1,"Name the front desk / operations owner."),o(!!n.clinicalSignoff,"Choose who signs off clinical language."),o(!!n.approvalChannel,"Choose the approval channel."),o(n.copyTurnaround.trim().length>0,"Confirm copy turnaround."),o(n.creativeTurnaround.trim().length>0,"Confirm creative turnaround."),o(n.weeklyRhythmConfirm,"Confirm the weekly two-call rhythm, or note a required change."),o(n.callAttendees.includes("sharon"),"Sharon Otaguro must stay on the weekly calls.")),e===2&&(o(n.winLooksLike.trim().length>12,"Describe what a win looks like in 90 days."),o(n.priorityServices.length>0,"Choose at least one priority service to fill first."),n.priorityServices.includes("other")&&o(n.otherPriorityService.trim().length>1,"Name the other priority service."),o(n.capacityDaysRooms.trim().length>4,"Tell us which days and rooms are actually open."),o(n.cannotTakeMore.trim().length>2,"Note what you cannot take more of, or write “none.”")),e===3&&(o(n.bookingMethods.length>0,"Select how new patients book today."),n.bookingMethods.includes("other")&&o(n.otherBookingMethod.trim().length>1,"Describe the other booking path."),o(n.acceptSpeedToLead||n.customSpeedToLead.trim().length>4,"Accept the 1-business-hour speed-to-lead, or write the SLA you can keep."),o(n.afterConsult.trim().length>8,"Describe what happens after a consult."),o(!!n.membershipExists,"Say whether a membership exists."),o(!!n.askReviews,"Tell us whether you currently ask for reviews or referrals.")),e===4&&(o(!!n.gtkOfferLive,"Confirm whether the Get-to-Know-You offer is still live."),o(!!n.firstVisitCardLive,"Confirm whether the $50 first-visit card is still live."),o(n.priorityEntryOffer.trim().length>4,"Name the priority entry offer for the next 90 days."),o(n.treatmentMenuLink.trim().length>5||n.treatmentMenuNotes.trim().length>4,"Add a treatment menu link or notes."),o(n.bannedClaims.trim().length>4,"List banned claims and phrases, or write “none beyond standard medical-spa rules.”"),o(n.whoOnCamera.trim().length>2,"Say who may appear on camera."),o(n.medicalDirectorDisclosure.trim().length>8,"Confirm the medical-director disclosure for ads and the site.")),e===5){for(const t of A){const c=n.access[t.key];o(!!(c!=null&&c.status),`Choose a status for ${t.label}.`),(c==null?void 0:c.status)==="will_send"&&o(!!c.byDate,`Add a send-by date for ${t.label}.`)}o(n.bookingSystemName.trim().length>1,"Name the booking system (Meevo or other)."),o(n.liveBookPath.trim().length>4,"Confirm the live book path."),o(!!n.mediaSpendConfirm,"Confirm whether a client-owned card can be placed on the ad accounts."),n.mediaSpendConfirm==="no"&&o(n.cannotInviteNotes.trim().length>8||n.mediaSpendNotes.trim().length>8,"If a card or invites cannot be placed yet, write who will share access in a secure channel, and when.")}return e===6&&(o(n.brandGuidelinesNone||n.brandGuidelinesLink.trim().length>5,"Add a brand-guidelines link, or check that none exist yet."),o(n.assetLocation.trim().length>4,"Tell us where logo and photos live (Drive, Dropbox, or similar — links only)."),o(!!n.photoRelease,"Confirm the patient photo/testimonial release status."),o(n.linesWillNotSay.trim().length>4,"List lines you will not say, or write “none beyond the clinical guardrails.”")),e===7&&o(n.acknowledgement,"Acknowledge that Creations remains responsible for patient care, clinical claims, privacy, staffing, and appointment fulfillment."),i}function I(e){return e===!0?"Yes":e===!1?"No":e?String(e):"—"}function B(e){return e.length?e.join(", "):"—"}function ie(e){switch(e){case"invite_sent":return"Invite sent";case"will_send":return"Will send by date";case"dont_have":return"We don’t have this";case"not_applicable":return"Not applicable";default:return"Not set"}}function P(e){return e.priorityServices.map(n=>{var i;return n==="other"?e.otherPriorityService||"Other":((i=j.find(o=>o.id===n))==null?void 0:i.label)??n})}function _(e){const n=P(e),i=e.callAttendees.map(t=>t==="sharon"?`${l.sharon.name} (required)`:t==="elizabeth"?l.elizabeth.name:t==="anisha"?"Anisha Singh, M.D.":t==="dayToDay"?e.dayToDayName||l.stephanie.name:t==="frontDesk"?e.frontDeskName||"Front desk / operations":t==="other"?e.callAttendeesOther||"Other":t).join(", "),o=A.map(t=>{const c=e.access[t.key],m=[c.status==="will_send"&&c.byDate?`by ${c.byDate}`:"",c.notes].filter(Boolean).join(" — ");return`- ${t.label}: ${ie(c.status)}${m?` (${m})`:""}`}).join(`
`);return`Creations Med Aesthetics & Wellness Spa — onboarding intake
Prepared for ${l.elizabeth.name}. Copy ${l.sharon.name} on all communications.
Primary contacts: ${l.elizabeth.email}; ${l.stephanie.name} ${l.stephanie.email}; ${l.sharon.email}
Agency: Martin Zialcita, ${p}
Saved: ${e.savedAt||"—"}
Submitted: ${e.submittedAt||"—"}

BUSINESS
Name: ${e.businessName}
Website: ${e.website}
Address: ${e.address}
Phone: ${e.phone}
Email: ${e.email}
90-day / invoice start: ${C(e.engagementStart||$)}
Public hours: ${e.publicHours}
Seasonal exceptions: ${e.seasonalHours||"—"}
Booking URL: ${e.bookingUrl}
Booking notes: ${e.bookingUrlNotes||"—"}

PEOPLE
President / decision-maker: ${e.presidentName}, ${e.presidentTitle}
President email: ${e.presidentEmail}
Confirmed decision-maker: ${I(e.presidentIsDecisionMaker)}
Medical director: ${e.medicalDirectorName}, license #${e.medicalDirectorLicense}
Sharon (required): ${e.sharonName}, ${e.sharonRole}, ${e.sharonEmail}
Sharon on weekly calls: Yes (required)
Sharon on approvals: Yes (required)
Day-to-day / management: ${e.dayToDayName} (${e.dayToDayRole||"—"}) ${e.dayToDayEmail} ${e.dayToDayPhone}
Front desk / ops: ${e.frontDeskName} (${e.frontDeskRole||"—"}) ${e.frontDeskEmail}
Clinical language sign-off: ${e.clinicalSignoff||"—"}
Approval channel: ${e.approvalChannel||"—"}
Copy turnaround: ${e.copyTurnaround}
Creative turnaround: ${e.creativeTurnaround}
Weekly rhythm: ${e.weeklyRhythmConfirm?"Two 1-hour calls (action + progress)":"Needs change"}
Weekly notes: ${e.weeklyRhythmNotes||"—"}
Call attendees: ${i}

90-DAY OUTCOME
Win looks like: ${e.winLooksLike}
Priority services: ${B(n)}
Average ticket: ${e.averageTicket||"—"}
Consult-to-plan close rate: ${e.consultCloseRate||"—"}
Rebook rate: ${e.rebookRate||"—"}
Healthy-margin offers: ${e.healthyMarginOffers||"—"}
Loss leaders: ${e.lossLeaderOffers||"—"}
Capacity (days/rooms open): ${e.capacityDaysRooms}
Cannot take more of: ${e.cannotTakeMore}

PATIENT JOURNEY
How patients book: ${B(e.bookingMethods)}${e.otherBookingMethod?` (${e.otherBookingMethod})`:""}
Current speed-to-lead: ${e.currentSpeedToLead||"—"}
Speed-to-lead going forward: ${e.acceptSpeedToLead?"Call or text within 1 business hour":e.customSpeedToLead}
After consult: ${e.afterConsult}
Membership: ${e.membershipExists||"—"}
Membership price: ${e.membershipPrice||"—"}
Membership eligibility: ${e.membershipEligible||"—"}
Ask for reviews/referrals: ${e.askReviews||"—"}
When: ${e.reviewsWhen||"—"}

OFFERS & GUARDRAILS
Get-to-Know-You still live: ${e.gtkOfferLive||"—"}
$50 first-visit card still live: ${e.firstVisitCardLive||"—"}
Priority 90-day entry offer: ${e.priorityEntryOffer}
Treatment menu: ${e.treatmentMenuLink||"—"}
Menu notes: ${e.treatmentMenuNotes||"—"}
Banned claims: ${e.bannedClaims}
Who may appear on camera: ${e.whoOnCamera}
Medical-director disclosure: ${e.medicalDirectorDisclosure}

ACCESS
Invite address for admin/editor: ${p}
Do not paste credentials in this form.
${o}
GHL / Nexus One owner: ${e.ghlOwner||"—"}
Booking system: ${e.bookingSystemName}
Live book path: ${e.liveBookPath}
Facebook canonical page: ${e.facebookPageUrl||"—"}
If they cannot invite: ${e.cannotInviteNotes||"—"}
Client-owned card on ad accounts: ${e.mediaSpendConfirm||"—"}
Recommended initial test spend: $2,000
Media spend notes: ${e.mediaSpendNotes||"—"}

BRAND & PROOF
Brand guidelines: ${e.brandGuidelinesNone?"None yet":e.brandGuidelinesLink||"—"}
Logo/photos: ${e.assetLocation}
Patient photo/testimonial release: ${e.photoRelease||"—"}
Lines they will not say: ${e.linesWillNotSay}
Past ads notes: ${e.pastAdsNotes||"—"}
Past ads links: ${e.pastAdsLinks||"—"}

ACKNOWLEDGEMENT
Creations remains responsible for patient care, medical advice, HIPAA/privacy, clinical claims, staffing, and appointment fulfillment. No PHI entered in this form: ${I(e.acknowledgement)}
`}function W(e){const n=P(e);return`Creations Med Spa onboarding intake
${l.elizabeth.name}, President · ${l.sharon.name} (required on all communications)
Stephanie Hatfield, Management · ${l.stephanie.email}
Martin Zialcita · ${p}

Business: ${e.businessName}
${e.address}
${e.phone} · ${e.email}
Site: ${e.website}
90-day / invoice start: ${C(e.engagementStart||$)}
Hours: ${e.publicHours.replace(/\s+/g," ").slice(0,180)}
Book: ${e.bookingUrl}

People: ${e.presidentName} (${e.presidentEmail}); ${e.sharonName} ${e.sharonEmail}; management ${e.dayToDayName} ${e.dayToDayEmail}; ops ${e.frontDeskName}; MD ${e.medicalDirectorName} #${e.medicalDirectorLicense}
Approvals: ${e.approvalChannel}, copy ${e.copyTurnaround}; creative ${e.creativeTurnaround}
Clinical sign-off: ${e.clinicalSignoff}

90-day win: ${e.winLooksLike.replace(/\s+/g," ").slice(0,240)}
Fill first: ${n.join(", ")}
Capacity: ${e.capacityDaysRooms.replace(/\s+/g," ").slice(0,140)}
Cannot take more: ${e.cannotTakeMore.replace(/\s+/g," ").slice(0,120)}

Journey: book via ${e.bookingMethods.join(", ")}; speed ${e.acceptSpeedToLead?"1 business hour call/text":e.customSpeedToLead}
Membership: ${e.membershipExists}${e.membershipPrice?` / ${e.membershipPrice}`:""}
Reviews: ${e.askReviews}${e.reviewsWhen?` (${e.reviewsWhen})`:""}

Offers: GTK ${e.gtkOfferLive}; $50 card ${e.firstVisitCardLive}
Entry offer: ${e.priorityEntryOffer.replace(/\s+/g," ").slice(0,160)}
Camera: ${e.whoOnCamera.replace(/\s+/g," ").slice(0,120)}

Access invite: ${p} (no passwords in this form)
Booking: ${e.bookingSystemName} · ${e.liveBookPath}
Ad card on accounts: ${e.mediaSpendConfirm} (recommended test $2,000)
If cannot invite: ${e.cannotInviteNotes.replace(/\s+/g," ").slice(0,160)||"—"}

Brand: ${e.brandGuidelinesNone?"no guidelines yet":e.brandGuidelinesLink}
Assets: ${e.assetLocation}
Release: ${e.photoRelease}

Acknowledgement: Creations remains responsible for care, claims, privacy, staffing, and fulfillment. No PHI.

Full structured answers are in the downloaded JSON. Attach that file to this email if the body is short.`}function se(e){const n="Creations Med Spa — onboarding intake";let i=_(e).trim();encodeURIComponent(i).length>K&&(i=`${W(e).trim()}

---
This email is the short version because the full intake exceeds typical mailto limits. Please attach the downloaded JSON file (see downloaded file) before sending.`);const o=`mailto:${p}?subject=${encodeURIComponent(n)}&body=${encodeURIComponent(i)}`;if(o.length>2e3){const t=`${W(e).trim()}

Please attach the downloaded JSON file before sending.`;return`mailto:${p}?subject=${encodeURIComponent(n)}&body=${encodeURIComponent(t)}`}return o}function F(e){const n=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),i=(e.submittedAt||e.savedAt||new Date().toISOString()).slice(0,10),o=URL.createObjectURL(n),t=document.createElement("a");t.href=o,t.download=`creations-medspa-onboarding-${i}.json`,document.body.appendChild(t),t.click(),t.remove(),URL.revokeObjectURL(o)}function te(e){const n=new Blob([_(e)],{type:"text/plain"}),i=(e.submittedAt||e.savedAt||new Date().toISOString()).slice(0,10),o=URL.createObjectURL(n),t=document.createElement("a");t.href=o,t.download=`creations-medspa-onboarding-${i}.txt`,document.body.appendChild(t),t.click(),t.remove(),URL.revokeObjectURL(o)}function g(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function T(e){return g(e)}function f(e,n){return e===n?"selected":""}function w(e){return e?'checked="checked"':""}function r(e,n,i,o="",t=""){return`<div class="field ${t}">
    <label for="${e}">${n}</label>
    ${i}
    ${o?`<span class="hint" id="${e}-hint">${o}</span>`:""}
  </div>`}function d(e,n,i={}){const o=i.type??"text";return`<input id="${e}" name="${e}" type="${o}" value="${T(n)}" ${i.required?"required":""} ${i.readonly?"readonly":""} autocomplete="${i.autocomplete??"on"}" />`}function h(e,n,i=""){return`<textarea id="${e}" name="${e}" placeholder="${T(i)}">${g(n)}</textarea>`}function L(e,n,i){return`<div class="choice-grid cols-3" role="radiogroup" aria-labelledby="${e}-label">
    ${n.map(o=>`<label class="choice"><input type="radio" name="${e}" value="${o.value}" ${i===o.value?"checked":""} /> ${g(o.label)}</label>`).join("")}
  </div>`}const E=[{value:"yes",label:"Yes"},{value:"no",label:"No"},{value:"unsure",label:"Unsure"}];function re(){return`
    <p class="kicker">Private client intake</p>
    <h1>Confirm what we know. Add only what we still need.</h1>
    <p class="lede">This page opens the 90-day growth engagement for Creations Med Aesthetics & Wellness Spa, beginning ${C($)}. It takes about 20–25 minutes. Answers save in this browser so you can pause and return on the same device.</p>
    <p class="aside">Not to be confused with Facial Creations Spa of Tampa Bay. This intake is only for the Lutz practice at 1535 N Dale Mabry Hwy.</p>
  `}function ae(e){return`
    ${re()}
    <div class="stack">
      ${r("businessName","Public business name",d("businessName",e.businessName,{required:!0}),"Correct if the public name has changed.")}
      ${r("website","Website",d("website",e.website,{type:"url",required:!0}))}
      ${r("address","Street address",d("address",e.address,{required:!0}))}
      <div class="grid-2">
        ${r("phone","Public phone",d("phone",e.phone,{type:"tel",required:!0}))}
        ${r("email","Public email",d("email",e.email,{type:"email",required:!0}))}
      </div>
      ${r("engagementStart","90-day engagement start",`<input id="engagementStart" name="engagementStart" type="date" value="${T(e.engagementStart)}" required />`,`Invoice period and the 90-day engagement begin ${C(e.engagementStart||$)} unless you correct this date.`)}
      ${r("publicHours","Current public hours",h("publicHours",e.publicHours,"Enter the hours currently published for patients. We do not have these on file."),"Type them as patients should see them. Do not skip this — we will not invent hours.")}
      ${r("seasonalHours","Seasonal exceptions",h("seasonalHours",e.seasonalHours,"Holidays, summer hours, provider time off — or leave blank."))}
      ${r("bookingUrl","Live booking URL",d("bookingUrl",e.bookingUrl,{type:"url",required:!0}),"We believe /reserve-now/ may be the live book path. Confirm or correct.")}
      ${r("bookingUrlNotes","Booking path notes",h("bookingUrlNotes",e.bookingUrlNotes,"Meevo, a different scheduler, phone-only overflow, etc."))}
    </div>
  `}function le(e){return`
    <p class="kicker">Step 2 of 8</p>
    <h1>People and approvals</h1>
    <p class="lede">Confirm the primary contacts, who decides, and how work actually moves. Sharon Otaguro stays on weekly calls and approvals for this engagement.</p>
    <p class="aside">On file: ${l.elizabeth.name} (${l.elizabeth.email}); ${l.stephanie.name} (${l.stephanie.email}); ${l.sharon.name} (${l.sharon.email}). Correct only if something has changed.</p>
    <div class="stack">
      <div class="person">
        <h2>${l.elizabeth.name}</h2>
        <p class="meta">President · decision-maker</p>
        <div class="stack">
          <div class="grid-2">
            ${r("presidentName","Name",d("presidentName",e.presidentName,{required:!0}))}
            ${r("presidentTitle","Title",d("presidentTitle",e.presidentTitle))}
          </div>
          ${r("presidentEmail","Email for approvals",d("presidentEmail",e.presidentEmail,{type:"email",required:!0}))}
          <label class="choice"><input type="checkbox" name="presidentIsDecisionMaker" ${w(e.presidentIsDecisionMaker)} /> Elizabeth is the decision-maker for this 90-day engagement.</label>
        </div>
      </div>

      <div class="person locked">
        <h2>${l.sharon.name} <span class="required-flag">Required</span></h2>
        <p class="meta">Spa consultant. She cannot be removed from this intake or from weekly communications.</p>
        <div class="stack">
          <div class="grid-2">
            ${r("sharonName","Name",d("sharonName",e.sharonName,{required:!0}))}
            ${r("sharonRole","Role",d("sharonRole",e.sharonRole,{readonly:!0}))}
          </div>
          ${r("sharonEmail","Email",d("sharonEmail",e.sharonEmail,{type:"email",required:!0}),"Required. Sharon stays on weekly calls and approvals.")}
          <label class="choice locked"><input type="checkbox" name="sharonOnWeeklyCalls" checked="checked" disabled /> Required on weekly calls. On — cannot be turned off.</label>
          <label class="choice locked"><input type="checkbox" name="sharonOnApprovals" checked="checked" disabled /> Required on approvals. On — cannot be turned off.</label>
        </div>
      </div>

      <div class="person">
        <h2>${l.stephanie.name}</h2>
        <p class="meta">Management · day-to-day contact</p>
        <div class="stack">
          <div class="grid-2">
            ${r("dayToDayName","Name",d("dayToDayName",e.dayToDayName,{required:!0}))}
            ${r("dayToDayRole","Role",d("dayToDayRole",e.dayToDayRole))}
          </div>
          <div class="grid-2">
            ${r("dayToDayEmail","Email",d("dayToDayEmail",e.dayToDayEmail,{type:"email",required:!0}))}
            ${r("dayToDayPhone","Mobile or desk",d("dayToDayPhone",e.dayToDayPhone,{type:"tel"}))}
          </div>
        </div>
      </div>

      <div class="person">
        <h2>Medical director</h2>
        <p class="meta">Confirm. Correct only if this has changed.</p>
        <div class="grid-2">
          ${r("medicalDirectorName","Name",d("medicalDirectorName",e.medicalDirectorName,{required:!0}))}
          ${r("medicalDirectorLicense","Florida license",d("medicalDirectorLicense",e.medicalDirectorLicense,{required:!0}))}
        </div>
      </div>

      <div class="person">
        <h2>Front desk / operations</h2>
        <p class="meta">Owner of the book, phones, and same-day patient flow — if that is not Stephanie.</p>
        <div class="stack">
          <div class="grid-2">
            ${r("frontDeskName","Name",d("frontDeskName",e.frontDeskName,{required:!0}))}
            ${r("frontDeskRole","Role",d("frontDeskRole",e.frontDeskRole))}
          </div>
          ${r("frontDeskEmail","Email",d("frontDeskEmail",e.frontDeskEmail,{type:"email"}),"If Stephanie also owns the desk, enter her name here. If someone else runs the book, name them.")}
        </div>
      </div>

      <div>
        <p class="legend" id="clinicalSignoff-label">Who signs off clinical language</p>
        ${L("clinicalSignoff",[{value:"elizabeth",label:"Elizabeth"},{value:"anisha",label:"Anisha"},{value:"both",label:"Both"}],e.clinicalSignoff)}
      </div>

      <div>
        <p class="legend" id="approvalChannel-label">Approval channel</p>
        ${L("approvalChannel",[{value:"email",label:"Email"},{value:"text",label:"Text"}],e.approvalChannel)}
      </div>

      <div class="grid-2">
        ${r("copyTurnaround","Copy turnaround",`<select id="copyTurnaround" name="copyTurnaround">
            <option value="same day" ${f(e.copyTurnaround,"same day")}>Same business day</option>
            <option value="1 business day" ${f(e.copyTurnaround,"1 business day")}>1 business day (recommended)</option>
            <option value="2 business days" ${f(e.copyTurnaround,"2 business days")}>2 business days</option>
          </select>`)}
        ${r("creativeTurnaround","Creative turnaround",`<select id="creativeTurnaround" name="creativeTurnaround">
            <option value="1 business day" ${f(e.creativeTurnaround,"1 business day")}>1 business day</option>
            <option value="2 business days for creative with faces or clinical claims" ${f(e.creativeTurnaround,"2 business days for creative with faces or clinical claims")}>2 business days for faces or clinical claims (recommended)</option>
            <option value="3 business days" ${f(e.creativeTurnaround,"3 business days")}>3 business days</option>
          </select>`)}
      </div>

      <label class="choice"><input type="checkbox" name="weeklyRhythmConfirm" ${w(e.weeklyRhythmConfirm)} /> Two 1-hour calls each week: one action call, one progress call.</label>
      ${r("weeklyRhythmNotes","If that rhythm must change",h("weeklyRhythmNotes",e.weeklyRhythmNotes))}

      <div>
        <p class="legend">Who must be on those calls</p>
        <div class="choice-grid cols-2">
          ${H.map(n=>{const i=!!n.locked,o=e.callAttendees.includes(n.id)||i;return`<label class="choice"><input type="checkbox" name="callAttendees" value="${n.id}" ${w(o)} ${i?"disabled":""} /> ${g(n.label)}${i?" (required)":""}</label>`}).join("")}
        </div>
      </div>
      ${r("callAttendeesOther","If someone else must join",d("callAttendeesOther",e.callAttendeesOther))}

      <p class="aside">Agency owner for this engagement: ${G}, ${p}. Copy ${l.sharon.name} on every thread.</p>
    </div>
  `}function ce(e){return`
    <p class="kicker">Step 3 of 8</p>
    <h1>90-day outcome and economics</h1>
    <p class="lede">What we are actually filling, and what the books can support. Rough numbers are fine.</p>
    <div class="stack">
      ${r("winLooksLike","What a win looks like in 90 days",h("winLooksLike",e.winLooksLike,"Booked calendar, a service line, membership, reputation — be specific."))}
      <div>
        <p class="legend">Priority services to fill first</p>
        <div class="choice-grid cols-3">
          ${j.map(n=>`<label class="choice"><input type="checkbox" name="priorityServices" value="${n.id}" ${w(e.priorityServices.includes(n.id))} /> ${n.label}</label>`).join("")}
        </div>
      </div>
      ${r("otherPriorityService","If other, name it",d("otherPriorityService",e.otherPriorityService))}
      <div class="grid-2">
        ${r("averageTicket","Rough average ticket",d("averageTicket",e.averageTicket),"Optional. Rough is fine.")}
        ${r("consultCloseRate","Consult-to-plan close rate",d("consultCloseRate",e.consultCloseRate),"Optional. Rough is fine.")}
      </div>
      ${r("rebookRate","Rebook rate",d("rebookRate",e.rebookRate),"Optional. Rough is fine.")}
      ${r("healthyMarginOffers","Healthy-margin offers",h("healthyMarginOffers",e.healthyMarginOffers,"What should ads and follow-up protect."))}
      ${r("lossLeaderOffers","Loss leaders",h("lossLeaderOffers",e.lossLeaderOffers,"What can open the door but should not be the whole plan."))}
      ${r("capacityDaysRooms","Days and rooms actually open",h("capacityDaysRooms",e.capacityDaysRooms,"Which days, which rooms, which providers are truly available."))}
      ${r("cannotTakeMore","What you cannot take more of",h("cannotTakeMore",e.cannotTakeMore,"A provider, a device, a day of week — or write none."))}
    </div>
  `}function de(e){return`
    <p class="kicker">Step 4 of 8</p>
    <h1>Patient journey</h1>
    <p class="lede">How a new patient actually reaches the book today, and what happens after the consult.</p>
    <div class="stack">
      <div>
        <p class="legend">How new patients book today</p>
        <div class="choice-grid cols-2">
          ${Q.map(n=>`<label class="choice"><input type="checkbox" name="bookingMethods" value="${n.id}" ${w(e.bookingMethods.includes(n.id))} /> ${n.label}</label>`).join("")}
        </div>
      </div>
      ${r("otherBookingMethod","If other, describe it",d("otherBookingMethod",e.otherBookingMethod))}
      ${r("currentSpeedToLead","Current speed-to-lead",d("currentSpeedToLead",e.currentSpeedToLead),"How long until someone actually answers a new inquiry today.")}
      <label class="choice"><input type="checkbox" name="acceptSpeedToLead" ${w(e.acceptSpeedToLead)} /> Going forward: we will call or text within 1 business hour. (Recommended default.)</label>
      ${r("customSpeedToLead","Different SLA, if you cannot keep one business hour",d("customSpeedToLead",e.customSpeedToLead),"Leave blank if you accept the default.")}
      ${r("afterConsult","What happens after the consult",h("afterConsult",e.afterConsult,"Who follows up, how treatment plans are sent, when they rebook."))}
      <div>
        <p class="legend" id="membershipExists-label">Does a membership exist?</p>
        ${L("membershipExists",E,e.membershipExists)}
      </div>
      <div class="grid-2">
        ${r("membershipPrice","Membership price",d("membershipPrice",e.membershipPrice))}
        ${r("membershipEligible","Who is eligible",d("membershipEligible",e.membershipEligible))}
      </div>
      <div>
        <p class="legend" id="askReviews-label">Do you ask for reviews or referrals?</p>
        ${L("askReviews",[{value:"yes",label:"Yes"},{value:"no",label:"No"},{value:"sometimes",label:"Sometimes"}],e.askReviews)}
      </div>
      ${r("reviewsWhen","When you ask",d("reviewsWhen",e.reviewsWhen),"After first visit, after a result, at membership signup — or never yet.")}
    </div>
  `}function me(e){return`
    <p class="kicker">Step 5 of 8</p>
    <h1>Offers and clinical guardrails</h1>
    <p class="lede">What is still live at the front door, and the language we will not use.</p>
    <div class="stack">
      <div>
        <p class="legend" id="gtkOfferLive-label">Get-to-Know-You offer still live?</p>
        ${L("gtkOfferLive",E,e.gtkOfferLive)}
      </div>
      <div>
        <p class="legend" id="firstVisitCardLive-label">$50 first-visit card still live?</p>
        ${L("firstVisitCardLive",E,e.firstVisitCardLive)}
      </div>
      ${r("priorityEntryOffer","Priority entry offer for the next 90 days",h("priorityEntryOffer",e.priorityEntryOffer,"The offer ads and the front desk should lead with."))}
      ${r("treatmentMenuLink","Treatment menu link",d("treatmentMenuLink",e.treatmentMenuLink,{type:"url"}),"Links only. Do not upload patient files.")}
      ${r("treatmentMenuNotes","Treatment menu notes",h("treatmentMenuNotes",e.treatmentMenuNotes,"If there is no public menu, list the services we may promote."))}
      ${r("bannedClaims","Banned claims and phrases",h("bannedClaims",e.bannedClaims,"Units, guaranteed results, before/after language, GLP promises, competitor names, etc."))}
      ${r("whoOnCamera","Who may appear on camera",h("whoOnCamera",e.whoOnCamera,"Staff, Elizabeth, Anisha, no faces, brand-only — be explicit."))}
      ${r("medicalDirectorDisclosure","Medical-director disclosure for ads and the site",h("medicalDirectorDisclosure",e.medicalDirectorDisclosure))}
    </div>
  `}function he(e){const n=A.map(i=>{const o=e.access[i.key],t=o.status==="will_send";return`<div class="access-row">
      <h3>${g(i.label)}</h3>
      <p class="hint">${g(i.hint)}</p>
      <div class="access-controls">
        <div>
          <label for="access-${i.key}-status">Status</label>
          <select id="access-${i.key}-status" name="access-${i.key}-status" data-access="${i.key}" data-field="status">
            <option value="" ${f(o.status,"")}>Select</option>
            <option value="invite_sent" ${f(o.status,"invite_sent")}>Invite sent</option>
            <option value="will_send" ${f(o.status,"will_send")}>Will send by date</option>
            <option value="dont_have" ${f(o.status,"dont_have")}>We don’t have this</option>
            <option value="not_applicable" ${f(o.status,"not_applicable")}>Not applicable</option>
          </select>
        </div>
        <div class="${t?"":"is-hidden"}" data-date-wrap="${i.key}" style="${t?"":"display:none"}">
          <label for="access-${i.key}-date">Send by</label>
          <input id="access-${i.key}-date" name="access-${i.key}-date" type="date" value="${T(o.byDate)}" data-access="${i.key}" data-field="byDate" />
        </div>
        <div class="notes">
          <label for="access-${i.key}-notes">Notes</label>
          <input id="access-${i.key}-notes" name="access-${i.key}-notes" type="text" value="${T(o.notes)}" data-access="${i.key}" data-field="notes" placeholder="Named editor, account owner, page URL — never a password" />
        </div>
      </div>
    </div>`}).join("");return`
    <p class="kicker">Step 6 of 8</p>
    <h1>Access checklist</h1>
    <p class="lede">Invite ${p} as admin or editor. If you cannot invite, write who will share access in a secure channel, and when.</p>
    <div class="banner">
      <strong>Do not paste credentials.</strong>
      Do not enter passwords, 2FA codes, or recovery keys on this page. Access is an invite to ${p} plus notes.
    </div>
    <div class="stack">
      <div class="access-list">${n}</div>
      ${r("ghlOwner","Who owns GoHighLevel / Nexus One",d("ghlOwner",e.ghlOwner),"Name and email. Leave blank if not applicable.")}
      <div class="grid-2">
        ${r("bookingSystemName","Booking system name",d("bookingSystemName",e.bookingSystemName),"Meevo or other.")}
        ${r("liveBookPath","Live book path",d("liveBookPath",e.liveBookPath,{type:"url"}),"Confirm whether /reserve-now/ is the path patients actually use.")}
      </div>
      ${r("facebookPageUrl","Canonical Facebook Page URL",d("facebookPageUrl",e.facebookPageUrl,{type:"url"}),"One page only.")}
      ${r("cannotInviteNotes","If you cannot invite from this page",h("cannotInviteNotes",e.cannotInviteNotes,"Who will share access in a secure channel, and when."))}
      <div>
        <p class="legend" id="mediaSpendConfirm-label">Client-owned card on the ad accounts</p>
        <p class="hint" style="margin-bottom:0.6rem">Recommended initial test: $2,000. Do not enter card numbers here. Confirm only that Creations can place a card on Google Ads and Meta.</p>
        ${L("mediaSpendConfirm",[{value:"yes",label:"Yes, we can place a card"},{value:"later",label:"Not this week, but we can"},{value:"no",label:"Not yet"}],e.mediaSpendConfirm)}
      </div>
      ${r("mediaSpendNotes","Media spend notes",h("mediaSpendNotes",e.mediaSpendNotes))}
    </div>
  `}function ue(e){return`
    <p class="kicker">Step 7 of 8</p>
    <h1>Brand and proof</h1>
    <p class="lede">Links only. Do not upload patient photos or charts.</p>
    <div class="stack">
      ${r("brandGuidelinesLink","Brand guidelines link",d("brandGuidelinesLink",e.brandGuidelinesLink,{type:"url"}))}
      <label class="choice"><input type="checkbox" name="brandGuidelinesNone" ${w(e.brandGuidelinesNone)} /> None yet — we will work from the live site.</label>
      ${r("assetLocation","Where logo and photos live",h("assetLocation",e.assetLocation,"Google Drive, Dropbox, or similar. Paste the folder link."),"Patient photos only if a release already exists. No chart photos.")}
      <div>
        <p class="legend" id="photoRelease-label">Patient photo / testimonial release</p>
        ${L("photoRelease",[{value:"yes",label:"Yes, we have one"},{value:"no",label:"No"},{value:"need_one",label:"Need one written"}],e.photoRelease)}
      </div>
      ${r("linesWillNotSay","Lines we will not say",h("linesWillNotSay",e.linesWillNotSay,"Units, cost, results, GLP, painless, guaranteed, forever — add your list."))}
      ${r("pastAdsNotes","Past ads you liked or killed",h("pastAdsNotes",e.pastAdsNotes,"What worked, what felt off-brand, what legal asked you to stop."))}
      ${r("pastAdsLinks","Links to those ads",h("pastAdsLinks",e.pastAdsLinks,"URLs only."))}
    </div>
  `}function a(e,n){return n?`<div><dt>${g(e)}</dt><dd>${g(n)}</dd></div>`:""}function pe(e){const n=A.map(i=>{const o=e.access[i.key],t=o.status==="invite_sent"?"Invite sent":o.status==="will_send"?`Will send by ${o.byDate||"—"}`:o.status==="dont_have"?"We don’t have this":o.status==="not_applicable"?"Not applicable":"Not set";return a(i.label,[t,o.notes].filter(Boolean).join(" — "))}).join("");return`
    <p class="kicker">Step 8 of 8</p>
    <h1>Review and submit</h1>
    <p class="lede">Read this as the record we will work from. Submit saves a JSON copy in this browser, offers a download, and opens an email to ${p}.</p>
    <div class="summary">
      <section>
        <h2>Business</h2>
        <dl>
          ${a("Name",e.businessName)}
          ${a("Website",e.website)}
          ${a("Address",e.address)}
          ${a("Phone",e.phone)}
          ${a("Email",e.email)}
          ${a("90-day / invoice start",C(e.engagementStart||$))}
          ${a("Hours",e.publicHours)}
          ${a("Seasonal",e.seasonalHours)}
          ${a("Booking URL",e.bookingUrl)}
          ${a("Booking notes",e.bookingUrlNotes)}
        </dl>
      </section>
      <section>
        <h2>People</h2>
        <dl>
          ${a("President",`${e.presidentName}, ${e.presidentTitle} · ${e.presidentEmail}`)}
          ${a("Decision-maker",e.presidentIsDecisionMaker?"Elizabeth Remis confirmed":"Not confirmed")}
          ${a("Medical director",`${e.medicalDirectorName}, license #${e.medicalDirectorLicense}`)}
          ${a("Sharon Otaguro (required)",`${e.sharonName}, ${e.sharonRole} · ${e.sharonEmail}`)}
          ${a("Management / day-to-day",`${e.dayToDayName} · ${e.dayToDayEmail}`)}
          ${a("Front desk / ops",`${e.frontDeskName} · ${e.frontDeskEmail}`)}
          ${a("Clinical sign-off",e.clinicalSignoff==="both"?"Elizabeth and Anisha":e.clinicalSignoff==="elizabeth"?"Elizabeth":e.clinicalSignoff==="anisha"?"Anisha":"")}
          ${a("Approvals",`${e.approvalChannel}; copy ${e.copyTurnaround}; creative ${e.creativeTurnaround}`)}
          ${a("Weekly calls",e.weeklyRhythmConfirm?"Two 1-hour calls (action + progress)":"Needs change")}
          ${a("On the calls",e.callAttendees.map(i=>{var o;return((o=H.find(t=>t.id===i))==null?void 0:o.label)??i}).join(", "))}
        </dl>
      </section>
      <section>
        <h2>90-day outcome</h2>
        <dl>
          ${a("Win",e.winLooksLike)}
          ${a("Fill first",P(e).join(", "))}
          ${a("Average ticket",e.averageTicket)}
          ${a("Close rate",e.consultCloseRate)}
          ${a("Rebook",e.rebookRate)}
          ${a("Healthy margin",e.healthyMarginOffers)}
          ${a("Loss leaders",e.lossLeaderOffers)}
          ${a("Capacity",e.capacityDaysRooms)}
          ${a("Cannot take more",e.cannotTakeMore)}
        </dl>
      </section>
      <section>
        <h2>Patient journey</h2>
        <dl>
          ${a("Book today via",e.bookingMethods.join(", "))}
          ${a("Speed-to-lead now",e.currentSpeedToLead)}
          ${a("Going forward",e.acceptSpeedToLead?"Call or text within 1 business hour":e.customSpeedToLead)}
          ${a("After consult",e.afterConsult)}
          ${a("Membership",[e.membershipExists,e.membershipPrice,e.membershipEligible].filter(Boolean).join(" · "))}
          ${a("Reviews / referrals",[e.askReviews,e.reviewsWhen].filter(Boolean).join(" · "))}
        </dl>
      </section>
      <section>
        <h2>Offers and guardrails</h2>
        <dl>
          ${a("Get-to-Know-You",e.gtkOfferLive)}
          ${a("$50 first-visit card",e.firstVisitCardLive)}
          ${a("Priority offer",e.priorityEntryOffer)}
          ${a("Menu",[e.treatmentMenuLink,e.treatmentMenuNotes].filter(Boolean).join(" · "))}
          ${a("Banned claims",e.bannedClaims)}
          ${a("On camera",e.whoOnCamera)}
          ${a("Disclosure",e.medicalDirectorDisclosure)}
        </dl>
      </section>
      <section>
        <h2>Access</h2>
        <dl>
          ${a("Invite address",p)}
          ${n}
          ${a("GHL owner",e.ghlOwner)}
          ${a("Booking system",`${e.bookingSystemName} · ${e.liveBookPath}`)}
          ${a("Facebook page",e.facebookPageUrl)}
          ${a("If cannot invite",e.cannotInviteNotes)}
          ${a("Ad account card",e.mediaSpendConfirm)}
          ${a("Recommended test spend","$2,000")}
          ${a("Media notes",e.mediaSpendNotes)}
        </dl>
      </section>
      <section>
        <h2>Brand</h2>
        <dl>
          ${a("Guidelines",e.brandGuidelinesNone?"None yet":e.brandGuidelinesLink)}
          ${a("Assets",e.assetLocation)}
          ${a("Photo release",e.photoRelease)}
          ${a("Will not say",e.linesWillNotSay)}
          ${a("Past ads",[e.pastAdsNotes,e.pastAdsLinks].filter(Boolean).join(`
`))}
        </dl>
      </section>
    </div>
    <div class="ack">
      <label class="choice">
        <input type="checkbox" name="acknowledgement" ${w(e.acknowledgement)} />
        Creations Med Aesthetics & Wellness Spa remains responsible for patient care, medical advice, HIPAA and privacy, clinical claims, staffing, and appointment fulfillment. I will not enter protected health information, patient names, chart data, or patient photos in this form.
      </label>
    </div>
  `}function fe(e){return`
    <div class="confirm">
      <p class="kicker">Received in this browser</p>
      <h1>Thank you. Martin will read this next.</h1>
      <div class="rule"></div>
      <p class="lede">The intake is saved on this device. A JSON file downloaded for your records. An email draft addressed to ${p} should have opened with the subject “Creations Med Spa — onboarding intake.” If the draft did not open, use the button below and attach the downloaded file.</p>
      <p>What happens next: ${G} reviews the answers, then we schedule the 90-minute kickoff. ${l.sharon.name} stays on the thread for weekly calls and approvals. Keep ${l.stephanie.name} and ${l.elizabeth.name} on the same communications unless this intake says otherwise.</p>
      <div class="actions" style="position:static">
        <button class="btn secondary" type="button" data-action="email">Open email draft again</button>
        <button class="btn" type="button" data-action="download-json">Download JSON</button>
      </div>
      <div class="actions" style="position:static">
        <button class="btn ghost" type="button" data-action="download-text">Download summary</button>
        <button class="btn ghost" type="button" data-action="clear">Clear this browser copy</button>
      </div>
      <p class="save-line">Refresh will not lose the submitted copy until you clear it. Nothing was sent to a form vendor. No passwords were collected.</p>
      <pre class="json-block" id="intake-record">${g(JSON.stringify(e,null,2))}</pre>
    </div>
  `}function Y(e){const n=se(e),i=document.createElement("a");i.href=n,document.body.appendChild(i),i.click(),i.remove()}const J=document.querySelector("#app");if(!J)throw new Error("Missing #app");const b=J;let s=ee(),S=[],k=s.completed?"confirm":"form";function y(){s=ne(s);const e=b.querySelector(".save-line");e&&k==="form"&&(e.textContent=V(s.savedAt))}function ye(){switch(s.currentStep){case 0:return ae(s);case 1:return le(s);case 2:return ce(s);case 3:return de(s);case 4:return me(s);case 5:return he(s);case 6:return ue(s);default:return pe(s)}}function V(e){if(!e)return"Not saved yet — answers store in this browser as you type.";try{return`Saved in this browser ${new Date(e).toLocaleString()}. You can leave and resume here.`}catch{return"Saved in this browser."}}function N(){if(k==="confirm"){b.innerHTML=`
      <a class="skip" href="#content">Skip to content</a>
      <div class="shell">
        ${x()}
        <main class="main" id="content">
          <div class="mobile-progress">${U()}</div>
          <div class="sheet">${fe(s)}</div>
        </main>
      </div>
    `,q();return}const e=S.length===0?"":`<div class="errors" role="alert"><p>Please complete the required items before continuing.</p><ul>${S.map(t=>`<li>${t}</li>`).join("")}</ul></div>`,n=s.currentStep===0?"<span></span>":'<button class="btn secondary" type="button" data-nav="back">Back</button>',i=s.currentStep===R.length-1?"Submit intake":"Continue";b.innerHTML=`
    <a class="skip" href="#content">Skip to content</a>
    <div class="shell">
      ${x()}
      <main class="main" id="content">
        <div class="mobile-progress">${U()}</div>
        <form class="sheet" id="intake-form" novalidate autocomplete="off">
          ${e}
          ${ye()}
          <div class="actions">
            ${n}
            <button class="btn" type="submit" data-nav="next">${i}</button>
          </div>
          <p class="save-line">${V(s.savedAt)}</p>
        </form>
      </main>
    </div>
  `,q(),ke();const o=b.querySelector("h1");o==null||o.setAttribute("tabindex","-1"),o==null||o.focus({preventScroll:!0})}function x(){return`
    <aside class="rail">
      <div class="mark"><span class="mark-rule"></span><p>AI Marketing Box</p></div>
      <p class="rail-client">Creations Med Aesthetics &amp; Wellness Spa</p>
      <p class="rail-place">Lutz, Florida · 90-day growth engagement from ${C()}</p>
      <ol class="progress">
        ${R.map((e,n)=>{const i=k==="form"&&n===s.currentStep;return`<li class="${n<s.currentStep||k==="confirm"?"done":""}" ${i?'aria-current="step"':""}>
            <button type="button" data-jump="${n}">
              <span class="num">${String(n+1).padStart(2,"0")}</span>
              <span>${e.label}</span>
            </button>
          </li>`}).join("")}
      </ol>
      <div class="rail-note">
        <strong>Martin Zialcita</strong>
        martin@aimarketingbox.org<br />
        Copy Sharon Otaguro on every thread.
      </div>
    </aside>
  `}function U(){return`
    <div class="top"><span>AI Marketing Box</span><span>${k==="confirm"?"Submitted":`Step ${s.currentStep+1} of 8`}</span></div>
    <div class="ticks" aria-hidden="true">
      ${R.map((n,i)=>{const o=k==="form"&&i===s.currentStep,t=i<s.currentStep||k==="confirm";return`<span class="${o?"on":t?"done":""}"></span>`}).join("")}
    </div>
  `}function D(e){const n=m=>!!e.elements.namedItem(m),i=m=>{var u;return((u=e.elements.namedItem(m))==null?void 0:u.value)??""},o=m=>{var u;return!!((u=e.elements.namedItem(m))!=null&&u.checked)},t=m=>Array.from(e.querySelectorAll(`input[name="${m}"]:checked`)).map(u=>u.value),c=m=>{var u;return((u=e.querySelector(`input[name="${m}"]:checked`))==null?void 0:u.value)??""};if(n("publicHours")&&(s.businessName=i("businessName"),s.website=i("website"),s.address=i("address"),s.phone=i("phone"),s.email=i("email"),s.publicHours=i("publicHours"),s.seasonalHours=i("seasonalHours"),s.bookingUrl=i("bookingUrl"),s.bookingUrlNotes=i("bookingUrlNotes"),n("engagementStart")&&(s.engagementStart=i("engagementStart")||$)),n("sharonEmail")&&(s.presidentName=i("presidentName"),s.presidentTitle=i("presidentTitle"),s.presidentEmail=i("presidentEmail"),s.presidentIsDecisionMaker=o("presidentIsDecisionMaker"),s.medicalDirectorName=i("medicalDirectorName"),s.medicalDirectorLicense=i("medicalDirectorLicense"),s.sharonName=i("sharonName")||l.sharon.name,s.sharonRole="Spa consultant",s.sharonEmail=i("sharonEmail"),s.sharonOnWeeklyCalls=!0,s.sharonOnApprovals=!0,s.dayToDayName=i("dayToDayName"),s.dayToDayRole=i("dayToDayRole"),s.dayToDayEmail=i("dayToDayEmail"),s.dayToDayPhone=i("dayToDayPhone"),s.frontDeskName=i("frontDeskName"),s.frontDeskRole=i("frontDeskRole"),s.frontDeskEmail=i("frontDeskEmail"),s.clinicalSignoff=c("clinicalSignoff"),s.approvalChannel=c("approvalChannel"),s.copyTurnaround=i("copyTurnaround"),s.creativeTurnaround=i("creativeTurnaround"),s.weeklyRhythmConfirm=o("weeklyRhythmConfirm"),s.weeklyRhythmNotes=i("weeklyRhythmNotes"),s.callAttendees=Array.from(new Set(["sharon",...t("callAttendees")])),s.callAttendeesOther=i("callAttendeesOther")),n("winLooksLike")&&(s.winLooksLike=i("winLooksLike"),s.priorityServices=t("priorityServices"),s.otherPriorityService=i("otherPriorityService"),s.averageTicket=i("averageTicket"),s.consultCloseRate=i("consultCloseRate"),s.rebookRate=i("rebookRate"),s.healthyMarginOffers=i("healthyMarginOffers"),s.lossLeaderOffers=i("lossLeaderOffers"),s.capacityDaysRooms=i("capacityDaysRooms"),s.cannotTakeMore=i("cannotTakeMore")),n("afterConsult")&&(s.bookingMethods=t("bookingMethods"),s.otherBookingMethod=i("otherBookingMethod"),s.currentSpeedToLead=i("currentSpeedToLead"),s.acceptSpeedToLead=o("acceptSpeedToLead"),s.customSpeedToLead=i("customSpeedToLead"),s.afterConsult=i("afterConsult"),s.membershipExists=c("membershipExists"),s.membershipPrice=i("membershipPrice"),s.membershipEligible=i("membershipEligible"),s.askReviews=c("askReviews"),s.reviewsWhen=i("reviewsWhen")),n("priorityEntryOffer")&&(s.gtkOfferLive=c("gtkOfferLive"),s.firstVisitCardLive=c("firstVisitCardLive"),s.priorityEntryOffer=i("priorityEntryOffer"),s.treatmentMenuLink=i("treatmentMenuLink"),s.treatmentMenuNotes=i("treatmentMenuNotes"),s.bannedClaims=i("bannedClaims"),s.whoOnCamera=i("whoOnCamera"),s.medicalDirectorDisclosure=i("medicalDirectorDisclosure")),n("bookingSystemName")){for(const m of e.querySelectorAll("[data-access]")){const u=m.dataset.access,v=m.dataset.field;!u||!v||(s.access[u]||(s.access[u]={status:"",byDate:"",notes:""}),v==="status"&&(s.access[u].status=m.value),v==="byDate"&&(s.access[u].byDate=m.value),v==="notes"&&(s.access[u].notes=m.value))}s.ghlOwner=i("ghlOwner"),s.bookingSystemName=i("bookingSystemName"),s.liveBookPath=i("liveBookPath"),s.facebookPageUrl=i("facebookPageUrl"),s.cannotInviteNotes=i("cannotInviteNotes"),s.mediaSpendConfirm=c("mediaSpendConfirm"),s.mediaSpendNotes=i("mediaSpendNotes")}n("assetLocation")&&(s.brandGuidelinesLink=i("brandGuidelinesLink"),s.brandGuidelinesNone=o("brandGuidelinesNone"),s.assetLocation=i("assetLocation"),s.photoRelease=c("photoRelease"),s.linesWillNotSay=i("linesWillNotSay"),s.pastAdsNotes=i("pastAdsNotes"),s.pastAdsLinks=i("pastAdsLinks")),n("acknowledgement")&&(s.acknowledgement=o("acknowledgement"))}function be(){var n;const e=b.querySelector("#intake-form");if(e&&D(e),s.sharonRole="Spa consultant",s.sharonOnWeeklyCalls=!0,s.sharonOnApprovals=!0,s.callAttendees.includes("sharon")||s.callAttendees.unshift("sharon"),y(),S=z(s.currentStep,s),S.length){N(),(n=b.querySelector(".errors"))==null||n.scrollIntoView({behavior:"smooth",block:"start"});return}if(s.currentStep<R.length-1){s.currentStep+=1,y(),N(),window.scrollTo({top:0,behavior:"smooth"});return}s.completed=!0,s.submittedAt=new Date().toISOString(),y(),F(s),k="confirm",N(),Y(s)}function ke(){var n;const e=b.querySelector("#intake-form");e&&(e.addEventListener("submit",i=>{i.preventDefault(),be()}),e.addEventListener("input",()=>{D(e),y()}),e.addEventListener("change",i=>{D(e),y();const o=i.target;if(o!=null&&o.dataset.access&&o.dataset.field==="status"){const t=e.querySelector(`[data-date-wrap="${o.dataset.access}"]`);t&&(t.style.display=o.value==="will_send"?"":"none")}}),(n=e.querySelector('[data-nav="back"]'))==null||n.addEventListener("click",()=>{D(e),y(),S=[],s.currentStep=Math.max(0,s.currentStep-1),y(),N(),window.scrollTo({top:0})}))}function q(){b.querySelectorAll("[data-jump]").forEach(e=>{e.addEventListener("click",()=>{if(k==="confirm")return;const n=b.querySelector("#intake-form");n&&D(n),y();const i=Number(e.dataset.jump);if(!Number.isNaN(i)){if(i>s.currentStep)for(let o=s.currentStep;o<i;o+=1){const t=z(o,s);if(t.length){S=t,s.currentStep=o,y(),N();return}}S=[],s.currentStep=i,y(),N()}})}),b.querySelectorAll("[data-action]").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.action;n==="email"&&Y(s),n==="download-json"&&F(s),n==="download-text"&&te(s),n==="clear"&&window.confirm("Clear the saved intake from this browser? This does not retract an email you already sent.")&&(s=oe(),k="form",S=[],N())})})}N();
