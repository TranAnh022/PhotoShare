import sanityClient from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url"

//to create project-id and token
//access to backend folder and run "sanity manage"
//choose API section and create new one


//this client function to pull the data from database(sanity)
export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-04-19',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

