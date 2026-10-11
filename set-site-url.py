#!/usr/bin/env python3
"""Set absolute social sharing and canonical URLs for the final domain. No build step."""
from pathlib import Path
from urllib.parse import urlparse
from html import escape
import sys,re
if len(sys.argv)!=2:
    raise SystemExit('Usage: python set-site-url.py https://your-domain.example')
site_url=sys.argv[1].rstrip('/')
parsed=urlparse(site_url)
if parsed.scheme not in ('http','https') or not parsed.netloc or parsed.query or parsed.fragment or parsed.username or parsed.password:
    raise SystemExit('Provide an HTTP(S) site URL without query, fragment or embedded credentials.')
p=Path(__file__).resolve().parent/'index.html'
s=p.read_text(encoding='utf-8')
image=escape(site_url+'/assets/hero-reception.webp',quote=True)
s=re.sub(r'<meta property="og:image" content="[^"]*">',f'<meta property="og:image" content="{image}">',s)
canonical=escape(site_url+'/',quote=True)
for pattern in [r'\s*<link rel="canonical" href="[^"]*">',r'\s*<meta property="og:url" content="[^"]*">']:
    s=re.sub(pattern,'',s)
s=s.replace('</head>',f'<link rel="canonical" href="{canonical}">\n<meta property="og:url" content="{canonical}">\n</head>')
p.write_text(s,encoding='utf-8')
print('Updated index.html metadata for '+site_url)
