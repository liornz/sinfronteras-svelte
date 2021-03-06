import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { destinationMetaData, countryMetaData, country } from './types';

const enContryDataDirectory = path.join(process.cwd(), 'data', 'countries-data', 'en');
const esCountryDataDirectory = path.join(process.cwd(), 'data', 'countries-data', 'es');

export function getCountryFileNames(locale: string): string[] {
  const dataENFiles = fs.readdirSync(enContryDataDirectory);
	const dataESFiles = fs.readdirSync(esCountryDataDirectory);
  switch (locale) {
    case 'en-US':
      return dataENFiles;
    case 'es-AR':
      return dataESFiles;
    default:
      return dataENFiles;
  }
}

export function getCountryFileData(fileIdentifier: string, locale = 'en-US'): typeof countryData {
	const countrySlug = fileIdentifier.replace(/\.md$/, '');
  const filePathEN = path.join(enContryDataDirectory, `${countrySlug}.md`);
  const filePathES = path.join(esCountryDataDirectory, `${countrySlug}.md`);
  const fileContentEN = fs.readFileSync(filePathEN, 'utf-8');
  const fileContentES = fs.readFileSync(filePathES, 'utf-8');
	let fileContent;
	switch (locale) {
		case 'es-US':
			fileContent = fileContentEN;
			break;
		case 'es-AR':
			fileContent = fileContentES;
			break;
		default:
			fileContent = fileContentEN;
	}
	// const fileContent = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(fileContent);

	const countryData = {
		slug: countrySlug,
		...(data as countryMetaData),
		content
	};
	return countryData;
}

export function getAllCountriesData(locale = 'en-US'): country[] {
  const countryFileNames = getCountryFileNames(locale);
  const allCountries = countryFileNames.map((fileName) => {
    return getCountryFileData(fileName, locale);
  });
  return allCountries;
}

export function buildCountryDirectory(country: string, locale: string): string {
  const enDataDirectory = path.join(
    process.cwd(),
    'data',
    'destination-data',
    'en',
    country
  );
  const esDataDirectory = path.join(
    process.cwd(),
    'data',
    'destination-data',
    'es',
    country
  );
  const directory = locale === 'en-US' ? enDataDirectory : esDataDirectory;
  return directory;
}

export function getFileData(
  country: string,
  locale: string,
  fileIdentifier: string
): typeof postData {
  const directory = buildCountryDirectory(country, locale);
  const fileSlug = fileIdentifier.replace(/\.md$/, '');
  const filePath = path.join(directory, `${fileSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: fileSlug,
    countrySlug: country,
    ...(data as destinationMetaData),
    content,
  };
  return postData;
}

export function getFileNamesPerCountry(country: string, locale: string): string[] {

  const directory = buildCountryDirectory(country, locale);

  const fileNames = fs.readdirSync(directory);
  return fileNames;
}

export function getDestinationsPerCountry(country: string, locale = 'en-US'): typeof filesData {

  const directory = buildCountryDirectory(country, locale);

  const fileNames = fs.readdirSync(directory);
  const filesData = fileNames.map(file => {
    return getFileData(country, locale, file);
  });
  return filesData;
}

export function getFeaturedDestinations(locale: string): destinationMetaData[] {
  const countryFileNames = getCountryFileNames(locale);
   const countrySlugs = countryFileNames.map((fileName) =>
     fileName.replace(/\.md$/, '')
   );
   let allDestinationData: destinationMetaData[] = [];
  for (const country of countrySlugs) {
    const destinations = getDestinationsPerCountry(country, locale);
    allDestinationData = allDestinationData.concat(destinations);
  }
  const featuredDestinations = allDestinationData.filter(destination => destination.isFeatured === true);
  return featuredDestinations;
}
