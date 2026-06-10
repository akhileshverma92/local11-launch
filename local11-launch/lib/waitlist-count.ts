const NAMESPACE = 'local11';
const KEY = 'waitlist';
const FALLBACK_COUNT = 136;

async function ensureCounter() {
  const getRes = await fetch(`https://api.countapi.xyz/get/${NAMESPACE}/${KEY}`, {
    cache: 'no-store',
  });

  if (getRes.ok) {
    const data = await getRes.json();
    if (typeof data.value === 'number') return data.value;
  }

  await fetch(
    `https://api.countapi.xyz/create?namespace=${NAMESPACE}&key=${KEY}&value=${FALLBACK_COUNT}`,
    { cache: 'no-store' }
  );

  return FALLBACK_COUNT;
}

export async function getWaitlistCount(): Promise<number> {
  try {
    if (process.env.FORMSPREE_API_KEY) {
      const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? 'xgobzkaq';
      const res = await fetch(
        `https://formspree.io/api/0/forms/${formId}/submissions?limit=1`,
        {
          headers: {
            Authorization: `Bearer ${process.env.FORMSPREE_API_KEY}`,
          },
          cache: 'no-store',
        }
      );

      if (res.ok) {
        const data = await res.json();
        if (typeof data.total === 'number') return data.total;
        if (Array.isArray(data.submissions)) return data.submissions.length;
      }
    }

    return await ensureCounter();
  } catch {
    return FALLBACK_COUNT;
  }
}

export async function incrementWaitlistCount(): Promise<number> {
  try {
    const res = await fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`, {
      cache: 'no-store',
    });

    if (res.ok) {
      const data = await res.json();
      if (typeof data.value === 'number') return data.value;
    }

    return (await ensureCounter()) + 1;
  } catch {
    return FALLBACK_COUNT + 1;
  }
}
