export function resolveDisplayImageUrl(
  url: string | undefined,
  label: string,
  width = 600,
  height = 400,
  category?: string | null
): string {
  if (isUsableImageUrl(url)) {
    return url;
  }
  return buildProductPlaceholder(label, category, width, height);
}

function isUsableImageUrl(url: string | undefined): url is string {
  if (!url) {
    return false;
  }
  if (url.includes('i.imgur.com')) {
    return false;
  }
  if (url.includes('placehold.co')) {
    return false;
  }
  return true;
}

function buildProductPlaceholder(
  _label: string,
  category: string | null | undefined,
  width: number,
  height: number
): string {
  const theme = getTheme((category ?? '').toLowerCase());

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="${theme.start}" />
      <stop offset="100%" stop-color="${theme.end}" />
    </linearGradient>
  </defs>

  <rect width="${width}" height="${height}" fill="url(#bg)" />
  <circle cx="${Math.floor(width * 0.82)}" cy="${Math.floor(height * 0.2)}" r="${Math.floor(width * 0.11)}" fill="${theme.shape}" opacity="0.16" />
  <circle cx="${Math.floor(width * 0.18)}" cy="${Math.floor(height * 0.78)}" r="${Math.floor(width * 0.1)}" fill="${theme.shape}" opacity="0.12" />

  <circle cx="${Math.floor(width * 0.5)}" cy="${Math.floor(height * 0.5)}" r="${Math.floor(Math.min(width, height) * 0.14)}" fill="${theme.overlay}" />
  <rect x="${Math.floor(width * 0.5 - 34)}" y="${Math.floor(height * 0.5 - 26)}" width="68" height="52" rx="12" fill="${theme.icon}" />
  <rect x="${Math.floor(width * 0.5 - 20)}" y="${Math.floor(height * 0.5 - 8)}" width="40" height="24" rx="5" fill="${theme.iconInner}" />
  <circle cx="${Math.floor(width * 0.5 - 11)}" cy="${Math.floor(height * 0.5 + 5)}" r="3" fill="${theme.iconDot}" />
  <circle cx="${Math.floor(width * 0.5)}" cy="${Math.floor(height * 0.5 + 5)}" r="3" fill="${theme.iconDot}" />
  <circle cx="${Math.floor(width * 0.5 + 11)}" cy="${Math.floor(height * 0.5 + 5)}" r="3" fill="${theme.iconDot}" />

  <text x="${Math.floor(width * 0.5)}" y="${Math.floor(height * 0.5 + 52)}" text-anchor="middle"
    font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="600" fill="${theme.text}" opacity="0.9">
    Image unavailable
  </text>
</svg>`.trim();

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getTheme(categoryKey: string): {
  start: string;
  end: string;
  shape: string;
  icon: string;
  iconInner: string;
  iconDot: string;
  overlay: string;
  text: string;
} {
  if (categoryKey.includes('shoe')) {
    return {
      start: '#fff7ed',
      end: '#ffedd5',
      shape: '#fb923c',
      icon: '#ea580c',
      iconInner: '#fff7ed',
      iconDot: '#fdba74',
      overlay: 'rgba(124,45,18,0.14)',
      text: '#7c2d12',
    };
  }

  if (categoryKey.includes('cloth')) {
    return {
      start: '#eff6ff',
      end: '#dbeafe',
      shape: '#60a5fa',
      icon: '#2563eb',
      iconInner: '#dbeafe',
      iconDot: '#93c5fd',
      overlay: 'rgba(30,64,175,0.14)',
      text: '#1e3a8a',
    };
  }

  if (categoryKey.includes('elect') || categoryKey.includes('tech')) {
    return {
      start: '#f5f3ff',
      end: '#ede9fe',
      shape: '#8b5cf6',
      icon: '#6d28d9',
      iconInner: '#ede9fe',
      iconDot: '#c4b5fd',
      overlay: 'rgba(76,29,149,0.14)',
      text: '#4c1d95',
    };
  }

  return {
    start: '#f8fafc',
    end: '#e2e8f0',
    shape: '#94a3b8',
    icon: '#475569',
    iconInner: '#e2e8f0',
    iconDot: '#cbd5e1',
    overlay: 'rgba(15,23,42,0.12)',
    text: '#0f172a',
  };
}
