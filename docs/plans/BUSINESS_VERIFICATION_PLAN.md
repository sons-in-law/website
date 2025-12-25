# Business Verification Plan: liam-is-an.ai

**Created**: 2025-12-25
**Purpose**: Complete setup and Meta Business Verification for AI consultancy
**Business**: AI automation consultancy for SMBs
**Location**: Australia (NSW)

---

## Current Status

| Item | Status | Notes |
|------|:------:|-------|
| Domain purchased | ✅ | liam-is-an.ai |
| Website live | ❌ | Not set up |
| Business registered (ABN) | ❓ | **VERIFY** |
| Business name registered | ❓ | **VERIFY** |
| Domain email | ❌ | Not planned (may be required) |
| Meta Business account | ❓ | **VERIFY** |

### Your Details

```
Business Name:    [TBD - needs to match registration]
Domain:           liam-is-an.ai
Mobile:           0431 901 458
Address:          22/51-57 Railway Parade
                  Engadine NSW 2233
                  Australia
Country:          Australia
```

---

## Phase 1: Australian Business Registration

**Timeline: 1-3 days** | **Cost: $39-$300**

Before Meta can verify your business, you need to be a registered business entity in Australia.

### Option A: Sole Trader with ABN (Simplest)

| Step | Action | Cost | Time |
|------|--------|------|------|
| 1.1 | Apply for ABN at [business.gov.au](https://www.abr.gov.au/business-super-funds-702charities/applying-abn) | FREE | Instant-28 days |
| 1.2 | Register business name with ASIC | $39/year or $92/3 years | 1-2 days |

**Business Name Options:**
- "Liam Is An AI" (matches domain vibe)
- "Liam Wynne AI Consulting"
- Your personal name (no registration needed if trading as yourself)

> **Note**: If you already have an ABN as a sole trader, you just need to register the business name.

### Option B: Company (Pty Ltd) - More Complex

| Step | Action | Cost | Time |
|------|--------|------|------|
| 1.1 | Register company with ASIC | ~$538 | 1-3 days |
| 1.2 | Receive ACN (Australian Company Number) | Included | — |
| 1.3 | Apply for ABN | FREE | Instant |

**Recommendation**: Start as **Sole Trader + Business Name** (Option A). Simpler, cheaper, faster. You can always convert to Pty Ltd later.

### Checklist: Business Registration

- [ ] Check if you already have an ABN: [ABN Lookup](https://abr.business.gov.au/)
- [ ] If no ABN: Apply at [business.gov.au](https://www.abr.gov.au/)
- [ ] Register business name at [ASIC](https://asic.gov.au/for-business/registering-a-business-name/)
- [ ] Save your ABN certificate / Business Name certificate (PDF)
- [ ] Note your exact registered business name for Meta

---

## Phase 2: Website Setup

**Timeline: 1-2 days** | **Cost: $0-20/month**

Meta requires an active website with SSL that displays your business information.

### 2.1 Hosting Options

| Option | Cost | Difficulty | Recommendation |
|--------|------|------------|----------------|
| **Vercel** (static site) | FREE | Easy | ⭐ Best for simple site |
| **GitHub Pages** | FREE | Easy | Good alternative |
| **Cloudflare Pages** | FREE | Easy | Good alternative |
| **Netlify** | FREE | Easy | Good alternative |
| **Shared hosting** | $5-15/mo | Medium | Overkill for this |

**Recommendation**: Use **Vercel** - you're already using it for Gecko Gems.

### 2.2 Website Requirements for Meta Verification

| Requirement | Required? | How to Implement |
|-------------|:---------:|------------------|
| SSL (https://) | ✅ Yes | Automatic with Vercel |
| Business name visible | ✅ Yes | In header/footer |
| Business address | ✅ Yes | On contact page |
| Phone number | ✅ Yes | On contact page |
| ABN displayed | ⭐ Recommended | In footer |
| About/Services page | ⭐ Recommended | Explains what you do |
| Professional appearance | ✅ Yes | Doesn't need to be fancy |

### 2.3 Minimum Viable Website Structure

```
liam-is-an.ai/
├── / (Home)
│   ├── Hero: "AI Automation for Small & Medium Business"
│   ├── Brief intro (2-3 sentences)
│   └── Call to action
│
├── /about (About)
│   ├── Who you are
│   ├── What you do
│   └── Your approach
│
├── /contact (Contact) ⬅️ CRITICAL FOR VERIFICATION
│   ├── Business Name: [exact registered name]
│   ├── Address: 22/51-57 Railway Parade, Engadine NSW 2233
│   ├── Phone: 0431 901 458
│   ├── ABN: [your ABN]
│   └── Contact form (optional)
│
└── Footer (on all pages)
    ├── © 2025 [Business Name]
    ├── ABN: [number]
    └── Phone | Address
```

### 2.4 Tech Stack Recommendation

For a simple consultancy site:

```
Framework:     Next.js (you know it) OR plain HTML
Styling:       Tailwind CSS
Hosting:       Vercel
Domain DNS:    Point liam-is-an.ai to Vercel
SSL:           Automatic via Vercel
```

**Or even simpler**: Single HTML file with Tailwind via CDN, hosted on Vercel.

### 2.5 Domain DNS Setup

At your domain registrar (where you bought liam-is-an.ai):

```
Type    Name    Value
─────   ────    ─────────────────────────────
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

### Checklist: Website Setup

- [ ] Create simple Next.js project or HTML site
- [ ] Add home page with business intro
- [ ] Add contact page with: business name, address, phone, ABN
- [ ] Add footer with business details on all pages
- [ ] Deploy to Vercel
- [ ] Connect custom domain (liam-is-an.ai)
- [ ] Verify HTTPS works (https://liam-is-an.ai)
- [ ] Test that site is accessible (not geo-blocked)

---

## Phase 3: Email Decision

**Timeline: 0-1 day** | **Cost: $0-6/month**

### Do You Need a Domain Email?

| Verification Method | Domain Email Required? | Notes |
|---------------------|:----------------------:|-------|
| Phone verification | ❌ No | Use your mobile |
| SMS verification | ❌ No | Use your mobile |
| Email verification | ✅ Yes | Needs @liam-is-an.ai |
| Domain verification | ❌ No | Add DNS TXT record |

**You can skip domain email** if you verify via:
1. **Phone/SMS** - They call or text 0431 901 458
2. **Domain verification** - Add a DNS TXT record

### If You Want Free Domain Email Anyway

| Option | Cost | Notes |
|--------|------|-------|
| **Zoho Mail** | FREE (1 user) | Good free option |
| **Cloudflare Email Routing** | FREE | Forward to Gmail |
| **ImprovMX** | FREE | Forward to Gmail |
| Google Workspace | $7.20/mo | Overkill |

**Recommendation**: Use **Cloudflare Email Routing** (free) to forward hello@liam-is-an.ai to your Gmail. This gives you a professional email without monthly cost.

### Checklist: Email (Optional)

- [ ] **Skip if using phone verification**
- [ ] OR: Set up Cloudflare Email Routing (free forwarding)
- [ ] OR: Set up Zoho Mail (free)
- [ ] Test receiving email at your domain

---

## Phase 4: Gather Documents

**Timeline: 1 day** | **Cost: $0**

### Documents Needed for Australia

| Document | What It Proves | How to Get |
|----------|----------------|------------|
| **ABN Registration Confirmation** | Business registration | Download from ABR |
| **Business Name Certificate** | Legal business name | Download from ASIC |
| **Utility Bill** (optional) | Address verification | Your electricity/internet bill |

### How to Get Your Documents

**ABN Confirmation Letter:**
1. Go to [ABR - Australian Business Register](https://www.abr.gov.au/)
2. Log in with myGovID
3. Download ABN registration confirmation (PDF)

**Business Name Certificate:**
1. Go to [ASIC Connect](https://connectonline.asic.gov.au/)
2. Log in
3. Download business name certificate (PDF)

**Utility Bill (backup):**
- Electricity, gas, internet, or phone bill
- Must show your name AND the business address
- Must be recent (within 3 months)

### Document Checklist

- [ ] ABN Registration Confirmation (PDF) - **shows ABN + your name**
- [ ] Business Name Certificate (PDF) - **shows exact business name**
- [ ] Utility bill at business address (PDF) - **backup if needed**
- [ ] All documents are clear, not expired, readable

---

## Phase 5: Meta Business Account Setup

**Timeline: 30 minutes** | **Cost: $0**

### 5.1 Create Meta Business Account

1. Go to [business.facebook.com](https://business.facebook.com/)
2. Click "Create Account"
3. Enter:
   - **Business name**: [exact registered business name]
   - **Your name**: Liam Wynne
   - **Business email**: Your email (can be personal for now)
4. Complete setup

### 5.2 Fill in Business Information

Go to: Business Settings → Business Info

| Field | What to Enter | Must Match |
|-------|---------------|------------|
| Legal Business Name | [Exact name from ASIC certificate] | Documents exactly |
| Business Address | 22/51-57 Railway Parade, Engadine NSW 2233, Australia | Documents + Website |
| Business Phone | +61 431 901 458 | Website |
| Website | https://liam-is-an.ai | Must be live |
| Business Type | Professional Services or Consulting | — |

> **CRITICAL**: The business name must match your ASIC registration **character-for-character**.

### Checklist: Meta Business Setup

- [ ] Create Meta Business account
- [ ] Enter exact legal business name
- [ ] Enter business address (matching documents)
- [ ] Enter phone with country code: +61 431 901 458
- [ ] Add website URL: https://liam-is-an.ai
- [ ] Verify website is accessible

---

## Phase 6: Submit Verification

**Timeline: 10 min to submit, 1-14 days to approve** | **Cost: $0**

### 6.1 Start Verification

1. Go to: Business Settings → Security Center → Start Verification
2. OR: Business Settings → Business Info → "Verify Business"

### 6.2 Upload Documents

Upload your prepared documents:
- ABN Registration Confirmation
- Business Name Certificate
- (Optional) Utility bill

### 6.3 Choose Verification Method

| Method | How It Works | Recommended? |
|--------|--------------|:------------:|
| **Phone Call** | Meta calls +61 431 901 458, gives you a code | ⭐ Yes |
| **Text Message** | Meta texts code to your mobile | ⭐ Yes |
| Domain Verification | Add DNS TXT record | Backup option |
| Email | Needs domain email | Only if you set one up |

**Recommendation**: Choose **Phone Call** or **Text Message** - simplest since you don't need domain email.

### 6.4 Complete Verification

1. Enter the code from call/SMS
2. Submit for review
3. Wait for approval (typically 48 hours, up to 14 days)

### Checklist: Submit Verification

- [ ] Click "Start Verification" in Meta Business Suite
- [ ] Upload ABN Registration document
- [ ] Upload Business Name Certificate
- [ ] Select Phone or SMS verification
- [ ] Receive and enter verification code
- [ ] Submit for review
- [ ] Check email for approval (1-14 days)

---

## Complete Timeline

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    BUSINESS VERIFICATION TIMELINE                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   DAY 1-2: Business Registration                                             │
│   ├── Apply for ABN (if needed)                 [instant - 28 days]         │
│   └── Register business name with ASIC          [$39, 1-2 days]             │
│                                                                              │
│   DAY 2-3: Website Setup                                                     │
│   ├── Build simple site with contact info       [1-2 hours]                 │
│   ├── Deploy to Vercel                          [30 min]                    │
│   └── Connect domain + verify HTTPS             [30 min - 24 hours DNS]     │
│                                                                              │
│   DAY 3-4: Document Gathering                                                │
│   ├── Download ABN confirmation                 [10 min]                    │
│   └── Download business name certificate        [10 min]                    │
│                                                                              │
│   DAY 4: Meta Business Setup                                                 │
│   ├── Create Meta Business account              [15 min]                    │
│   ├── Fill in business information              [15 min]                    │
│   └── Submit verification with documents        [15 min]                    │
│                                                                              │
│   DAY 4-18: Wait for Approval                                                │
│   └── Typically 48 hours, up to 14 days                                     │
│                                                                              │
│   ════════════════════════════════════════════════════════════════════════  │
│   TOTAL: ~1 week if ABN exists, ~4 weeks if ABN application is slow         │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Cost Summary

| Item | Cost | Frequency |
|------|------|-----------|
| ABN Application | FREE | One-time |
| Business Name Registration | $39 | Per year |
| Domain (liam-is-an.ai) | Already purchased | — |
| Vercel Hosting | FREE | — |
| SSL Certificate | FREE (via Vercel) | — |
| Domain Email | FREE (Cloudflare routing) | Optional |
| Meta Business Verification | FREE | — |
| **TOTAL** | **~$39** | First year |

---

## Quick Reference: What Must Match

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        MATCHING REQUIREMENTS                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ASIC Business Name Certificate                                             │
│         ║                                                                    │
│         ║ exact match                                                        │
│         ▼                                                                    │
│   Meta Business Manager "Legal Business Name"                                │
│         ║                                                                    │
│         ║ exact match                                                        │
│         ▼                                                                    │
│   Website (liam-is-an.ai)                                                    │
│         - Business name in header/footer                                     │
│         - Address: 22/51-57 Railway Parade, Engadine NSW 2233               │
│         - Phone: 0431 901 458 (or +61 431 901 458)                          │
│         - ABN: [your ABN number]                                             │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Troubleshooting

### If ABN Application Takes Too Long
- Standard processing: instant to 28 days
- If urgent: Call ATO on 13 28 66
- You can use existing personal ABN if you have one

### If Verification is Rejected
Common reasons and fixes:

| Rejection Reason | Fix |
|------------------|-----|
| Name doesn't match | Use EXACT name from ASIC certificate |
| Website not accessible | Check DNS, wait 24-48h after setup |
| Documents unclear | Re-scan at higher resolution |
| Address doesn't match | Update website OR use utility bill |

### If You Don't Want to Register a Business
You CAN verify as an individual ("Admin Verification") instead of business verification:
- Uses personal ID (driver's license, passport)
- Less credibility with Meta
- May limit some features

**Recommendation**: Register the business properly - it's only $39/year and gives you ABN for invoicing anyway.

---

## Next Steps After Verification

Once Meta Business is verified, you can:

1. ✅ Submit apps for App Review with higher trust
2. ✅ Access advanced API permissions
3. ✅ Run Meta ads (if needed)
4. ✅ Connect client Instagram accounts (Gecko Stones)

---

## Links

- [Apply for ABN](https://www.abr.gov.au/)
- [ABN Lookup](https://abr.business.gov.au/)
- [Register Business Name (ASIC)](https://asic.gov.au/for-business/registering-a-business-name/)
- [Meta Business Suite](https://business.facebook.com/)
- [Vercel](https://vercel.com/)
- [Cloudflare Email Routing](https://www.cloudflare.com/email-routing/)

---

**Last Updated**: 2025-12-25
