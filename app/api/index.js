import client from '@/client';

export async function getLogo() {
  const query = `*[_type == "logo" && title == "Default"][0] {
    logo {
      asset -> {
        url
      }
    }
  }`;
  const res = await client.fetch(query);
  return res?.logo?.asset?.url ?? null;
}

export async function getNavigation(lng) {
  const query = `*[_type == "navigation" && name == "Default"][0] {
    navigationItems[] | order(position asc) {
      "title": title[_key == $lng][0].value,
      url,
      type,
      isExternalLink,
      isContactLink
    }
  }`;

  const params = { lng };

  return await client.fetch(query, params);
}

export async function getFooter(lng) {
  const query = `*[_type == "footer" && name == "Default"][0] {
  "footerHeading": footerHeading[_key == $lng][0].value,
  "text": text[_key == $lng][0].value,
  }`;

  const params = { lng };

  return await client.fetch(query, params);
}

export async function getCompanyInfo(lng) {
  const query = `*[_type == "companyInfo" && name == "Default"][0] {
    email,
    address,
    companyName,
    companyLegalName,
    pib,
    mb,
    socialLinks[] {
      icon {
        asset -> {
          url
        }
      },
      url,
      socialNetwork
    }
  }`;

  const params = { lng };

  return await client.fetch(query, params);
}

export async function getPageMetaData(page, lng) {
  const query = `*[_type == $page && name == "Default"][0] {
    metaData {
      "title": title[_key == $lng][0].value,
      "description": description[_key == $lng][0].value,
      "keywords": keywords[_key == $lng][0].value,
      url,
      ogImage {
        asset -> {
          url
        }
      },
    }
  }`;

  const params = { page, lng };

  return await client.fetch(query, params);
}
