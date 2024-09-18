import Link from 'next/link';

export const siteConfig = (t, lng) => {
  return [
    {
      key: 'dashboard',
      label: <Link href={`/${lng}/dashboard`}>{t('dashboard')}</Link>,
    },
    {
      key: 'banner_management',
      label: (
        <Link href={`/${lng}/banner`}>{t('slide_banner_management')}</Link>
      ),
    },
    {
      key: 'product',
      label: t('product'),
      children: [
        {
          key: 'product_management',
          label: (
            <Link href={`/${lng}/product/product-management`}>
              {t('product_management')}
            </Link>
          ),
        },
        {
          key: 'category_management',
          label: (
            <Link href={`/${lng}/product/category-management`}>
              {t('category_management')}
            </Link>
          ),
        },
        {
          key: 'brand_management',
          label: (
            <Link href={`/${lng}/product/brand-management`}>
              {t('brand_management')}
            </Link>
          ),
        },
        {
          key: 'unit_management',
          label: (
            <Link href={`/${lng}/product/unit-management`}>
              {t('unit_management')}
            </Link>
          ),
        },
      ],
    },
    {
      key: 'purchase_management',
      label: <Link href={`/${lng}/purchase`}>{t('purchase_management')}</Link>,
    },
    {
      key: 'member',
      label: t('member'),
      open: true,
      children: [
        {
          key: 'member_management',
          label: (
            <Link href={`/${lng}/member/management`}>
              {t('member_management')}
            </Link>
          ),
        },
        {
          key: 'check_store',
          label: t('check_store'),
        },
      ],
    },
    {
      key: 'article_management',
      label: <Link href={`/${lng}/article`}>{t('article_management')}</Link>,
    },
  ];
};
