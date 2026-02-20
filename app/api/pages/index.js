import client from '@/client';

export async function getHomePage(lng) {
  const query = `*[_type == "homePage" && name == "Default"][0] {
    name,
    homePageHeroSection {
      hero {
        asset -> {
          url
        }
      },
      "heroSectionHeading": heroSectionHeading[_key == $lng][0].value,
      "heroSectionSubheading": heroSectionSubheading[_key == $lng][0].value,
      "heroSectionEstText": heroSectionEstText[_key == $lng][0].value,
      heroSectionButton {
        "label": label[_key == $lng][0].value,
        url,
        variant,
        type,
        isExternalLink
      }
    },
    homePageKpiSection {
      kpiItems[] | order(position asc) {
        value,
        "text": text[_key == $lng][0].value,
        position
      }
    },
    homePageAboutSection {
      "aboutSectionCategory": aboutSectionCategory[_key == $lng][0].value,
      "aboutSectionHeading": aboutSectionHeading[_key == $lng][0].value,
      "aboutSectionDescription": aboutSectionDescription[_key == $lng][0].value,
      aboutSectionItems[] | order(position asc) {
        "title": title[_key == $lng][0].value,
        "text": text[_key == $lng][0].value,
        position
      }
    },
    homePageWhatWeDoSection {
      "whatWeDoSectionCategory": whatWeDoSectionCategory[_key == $lng][0].value,
      "whatWeDoSectionHeading": whatWeDoSectionHeading[_key == $lng][0].value,
      "whatWeDoSectionSubHeading": whatWeDoSectionSubHeading[_key == $lng][0].value,
      serviceItems[] | order(position asc) {
        "serviceTitle": serviceTitle[_key == $lng][0].value,
        "serviceText": serviceText[_key == $lng][0].value,
        position,
        icon {
          asset -> {
            url
          }
        }
      }
    },
    homeTechStackSection {
      "techStackSectionCategory": techStackSectionCategory[_key == $lng][0].value,
      "techStackSectionHeading": techStackSectionHeading[_key == $lng][0].value,
      "techStackSectionSubHeading": techStackSectionSubHeading[_key == $lng][0].value,
      techStackCategories[] | order(position asc) {
        "name": name[_key == $lng][0].value,
        techStackCategoryItems[]
      }
    },
    homePortfolioSection {
      "portfolioSectionCategory": portfolioSectionCategory[_key == $lng][0].value,
      "portfolioSectionHeading": portfolioSectionHeading[_key == $lng][0].value,
      "portfolioSectionSubHeading": portfolioSectionSubHeading[_key == $lng][0].value,
      portfolioProjects[] | order(position asc) {
        "category": category[_key == $lng][0].value,
        "name": name[_key == $lng][0].value,
        "text": text[_key == $lng][0].value,
        technologies[]
      }
    },
    homePageClientsSection {
      "clientsSectionHeading": clientsSectionHeading[_key == $lng][0].value,
      clients[]
    },
    homePageDocumentsSection {
      "documentsSectionCategory": documentsSectionCategory[_key == $lng][0].value,
      "documentsSectionHeading": documentsSectionHeading[_key == $lng][0].value,
      "documentsSectionSubHeading": documentsSectionSubHeading[_key == $lng][0].value,
      proposals[] {
        "category": category[_key == $lng][0].value,
        "name": name[_key == $lng][0].value,
        "description": description[_key == $lng][0].value,
        document {
          asset-> {
            url,
            originalFilename,
            extension,
            mimeType,
            size,
            _createdAt
          },
          "downloadUrl": asset->.url + "?dl=" + coalesce(asset->.originalFilename, ""),
          numberOfPages
        }
      }
    },
    homePageTeamSection {
      "teamSectionCategory": teamSectionCategory[_key == $lng][0].value,
      "teamSectionHeading": teamSectionHeading[_key == $lng][0].value,
      "teamSectionSubHeading": teamSectionSubHeading[_key == $lng][0].value,
      teamMembers[] | order(position asc) {
        name,
        "role": role[_key == $lng][0].value,
        position,
        photo {
          asset -> {
            url
          }
        }
      }
    },
    metaData {
      title,
      description
    }
  }`;

  const params = { lng };

  return await client.fetch(query, params);
}
