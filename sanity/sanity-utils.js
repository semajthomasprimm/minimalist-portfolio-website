import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config';

export async function getAuthor(){
    return createClient(clientConfig).fetch(
        groq`*[_type == "author"][0]{
            _id,
            heroBlurb,
            aboutDescription,
            "homepageHeroDesktop": homepageHeroDesktop.asset->url,
            "homepageHeroTablet": homepageHeroTablet.asset->url,
            "homepageHeroMobile": homepageHeroMobile.asset->url,
            "profileDesktop": profileDesktop.asset->url,
            "profileTablet": profileTablet.asset->url,
            "profileMobile": profileMobile.asset->url,
        }`
    );
}

export async function getProjects() {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project"] | order(_createdAt asc){
            _id,
            name,
            "slug": slug.current,
            shortDescription,
            "portfolioPageImageDesktop": portfolioPageImageDesktop.asset->url,
            "portfolioPageImageTablet": portfolioPageImageTablet.asset->url,
            "portfolioPageImageMobile": portfolioPageImageMobile.asset->url,
        }`
    );
}

export async function getProject(slug){
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            name,
            shortDescription,
            longDescription,
            skills,
            technologies,
            prevProject,
            "prevProjectSlug": prevProjectSlug.current,
            nextProject,
            "nextProjectSlug": nextProjectSlug.current,
            "heroDesktop": heroDesktop.asset->url,
            "previewImage1Desktop": previewImage1Desktop.asset->url,
            "previewImage2Desktop": previewImage2Desktop.asset->url,
            "heroTablet": heroTablet.asset->url,
            "previewImage1Tablet": previewImage1Tablet.asset->url,
            "previewImage2Tablet": previewImage2Tablet.asset->url,
            "heroMobile": heroMobile.asset->url,
            "previewImage1Mobile": previewImage1Mobile.asset->url,
            "previewImage2Mobile": previewImage2Mobile.asset->url,
        }`,
        {slug}
    );
};

export async function getNav() {
    return createClient(clientConfig).fetch(
        groq`*[_type == "nav"][0]{
            logo {
                name,
                "image": image.asset->url,
                "alt" : image.alt
            },
            closedMenuIcon {
                name,
                "image": image.asset->url,
                "alt" : image.alt
            },
            openMenuIcon {
                name,
                "image": image.asset->url,
                "alt" : image.alt
            }
        }`
    );
}

export async function getFooter() {
    return createClient(clientConfig).fetch(
        groq`*[_type == "footer"][0]{
            logo {
                name,
                "image": image.asset->url,
                "alt" : image.alt
            },
            icons[] {
                name,
                url,
                "image": image.asset->url
            }
        }`
    );
}

export async function getContact() {
    return createClient(clientConfig).fetch(
        groq`*[_type == "contact"][0]{
            icons[] {
                name,
                url,
                "image": image.asset->url
            }
        }`
    );
}