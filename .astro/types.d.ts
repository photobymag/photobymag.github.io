declare module 'astro:content' {
	interface Render {
		'.mdoc': Promise<{
			Content(props: Record<string, any>): import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"about": {
"about.mdx": {
	id: "about.mdx";
  slug: "about";
  body: string;
  collection: "about";
  data: any
} & { render(): Render[".mdx"] };
};
"authors": Record<string, {
  id: string;
  slug: string;
  body: string;
  collection: "authors";
  data: InferEntrySchema<"authors">;
  render(): Render[".md"];
}>;
"magazine": {
"2024-06-12-maria-svarbova.mdx": {
	id: "2024-06-12-maria-svarbova.mdx";
  slug: "maria-svarbova";
  body: string;
  collection: "magazine";
  data: InferEntrySchema<"magazine">
} & { render(): Render[".mdx"] };
"2024-06-17-andres-gursky.mdx": {
	id: "2024-06-17-andres-gursky.mdx";
  slug: "andres-gursky";
  body: string;
  collection: "magazine";
  data: InferEntrySchema<"magazine">
} & { render(): Render[".mdx"] };
"2024-06-18-andoni-beristain.mdx": {
	id: "2024-06-18-andoni-beristain.mdx";
  slug: "andoni-beristain";
  body: string;
  collection: "magazine";
  data: InferEntrySchema<"magazine">
} & { render(): Render[".mdx"] };
"2024-06-19-alan-schaller.mdx": {
	id: "2024-06-19-alan-schaller.mdx";
  slug: "alan-schaller";
  body: string;
  collection: "magazine";
  data: InferEntrySchema<"magazine">
} & { render(): Render[".mdx"] };
"2024-06-24-gregory-crewdson.mdx": {
	id: "2024-06-24-gregory-crewdson.mdx";
  slug: "gregory-crewdson";
  body: string;
  collection: "magazine";
  data: InferEntrySchema<"magazine">
} & { render(): Render[".mdx"] };
"2024-06-25-franck-bohbot.mdx": {
	id: "2024-06-25-franck-bohbot.mdx";
  slug: "franck-bohbot";
  body: string;
  collection: "magazine";
  data: InferEntrySchema<"magazine">
} & { render(): Render[".mdx"] };
"2024-06-26-gray-malin.mdx": {
	id: "2024-06-26-gray-malin.mdx";
  slug: "gray-malin";
  body: string;
  collection: "magazine";
  data: InferEntrySchema<"magazine">
} & { render(): Render[".mdx"] };
"2024-06-27-sarah-pickering.mdx": {
	id: "2024-06-27-sarah-pickering.mdx";
  slug: "sarah-pickering";
  body: string;
  collection: "magazine";
  data: InferEntrySchema<"magazine">
} & { render(): Render[".mdx"] };
"2024-07-02-todd-hido.mdx": {
	id: "2024-07-02-todd-hido.mdx";
  slug: "todd-hido";
  body: string;
  collection: "magazine";
  data: InferEntrySchema<"magazine">
} & { render(): Render[".mdx"] };
"2024-07-04-edward-burtynsky.mdx": {
	id: "2024-07-04-edward-burtynsky.mdx";
  slug: "edward-burtynsky";
  body: string;
  collection: "magazine";
  data: InferEntrySchema<"magazine">
} & { render(): Render[".mdx"] };
"2024-07-10-natan-dvir.mdx": {
	id: "2024-07-10-natan-dvir.mdx";
  slug: "natan-dvir";
  body: string;
  collection: "magazine";
  data: InferEntrySchema<"magazine">
} & { render(): Render[".mdx"] };
"2024-07-19-christy-lee-rogers.mdx": {
	id: "2024-07-19-christy-lee-rogers.mdx";
  slug: "christy-lee-rogers";
  body: string;
  collection: "magazine";
  data: InferEntrySchema<"magazine">
} & { render(): Render[".mdx"] };
"2024-07-31-michael-wolf.mdx": {
	id: "2024-07-31-michael-wolf.mdx";
  slug: "michael-wolf";
  body: string;
  collection: "magazine";
  data: InferEntrySchema<"magazine">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../src/content/config.js");
}
