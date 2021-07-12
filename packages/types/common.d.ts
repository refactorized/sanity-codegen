declare namespace Sanity {
  /**
   * Represents a reference in Sanity to another entity. Note that the
   * generic type is strictly for TypeScript meta programming.
   */
  // NOTE: the _T is for only for typescript meta
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type Reference<_T> = {
    _type: 'reference';
    _ref: string;
  };

  /**
   * Represents a reference in Sanity to another entity with a key. Note that the
   * generic type is strictly for TypeScript meta programming.
   */
  // NOTE: the _T is for only for typescript meta
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type KeyedReference<_T> = {
    _type: 'reference';
    _key: string;
    _ref: string;
  };

  /**
   * Assets in Sanity follow the same structure as references however
   * the string in _ref can be formatted differently than a document.
   */
  type Asset = Reference<any>;

  interface Image {
    asset: Sanity.Asset;
  }

  interface File {
    asset: Sanity.Asset;
  }

  interface Geopoint {
    _type: 'geopoint';
    lat: number;
    lng: number;
    alt: number;
  }

  // TODO: include things like markdefs
  interface Block {
    _type: 'block';
    [key: string]: any;
  }

  interface Document {
    _id: string;
    _createdAt: string;
    _rev: string;
    _updatedAt: string;
  }

  interface ImageCrop {
    _type: 'sanity.imageCrop';
    bottom: number;
    left: number;
    right: number;
    top: number;
  }

  interface ImageHotspot {
    _type: 'sanity.imageHotspot';
    height: number;
    width: number;
    x: number;
    y: number;
  }

  type Keyed<T> = T extends object ? T & { _key: string } : T;

  // TODO: possibly move these into a Codegen namespace into the codegen package
  type UndefinedToNull<T> = T extends null | undefined
    ? NonNullable<T> | null
    : NonNullable<T>;

  type _FlattenRecursive<T> = T extends any[]
    ?
        | _FlattenRecursive<UndefinedToNull<Extract<T[number], any[]>[number]>>
        | UndefinedToNull<Exclude<T[number], any[]>>
    : T;

  type Flatten<T> = _FlattenRecursive<T>[];

  type ArrayElementAccess<T extends any[]> = T[number] | null;

  type ReferenceType<T> = T extends NonNullable<T>
    ? T extends any[]
      ? ReferenceType<T[number]>[]
      : T extends Sanity.Reference<infer U>
      ? UndefinedToNull<U>
      : never
    : ReferenceType<NonNullable<T>> | null;

  type Index<
    T,
    K extends T extends any[]
      ? keyof NonNullable<T>[number]
      : keyof NonNullable<T>
  > = T extends NonNullable<T>
    ? T extends any[]
      ? Index<T[number], K>[]
      : T[K]
    : NonNullable<T>[K] | null;

  type ConditionalAttributeAccess<
    T extends { [key: string]: any },
    K extends string
  > = T extends any[] ? T[number][K] : T[K];

  // type QueryMapper<
  //   T,
  //   WithArray extends 'with_array' | 'without_array',
  //   NullableExpression = T
  // > = WithArray extends 'with_array'
  //   ? Flatten<UndefinedToNull<T>>
  //   : NullableExpression extends NonNullable<T>
  //   ? UndefinedToNull<T>
  //   : QueryMapper<NonNullable<T>, WithArray> | null;

  type QueryMapper<
    T,
    WithArray extends 'with_array' | 'without_array',
    NullableExpression = T
  > = NullableExpression extends NonNullable<T>
    ? WithArray extends 'with_array'
      ? Flatten<UndefinedToNull<T>>
      : T extends any[]
      ? Flatten<UndefinedToNull<T>>
      : UndefinedToNull<T>
    : QueryMapper<NonNullable<T>, WithArray> | null;

  // NullableExpression extends NonNullable<T>
  //   ? WithArray extends 'with_array'
  //     ? Flatten<UndefinedToNull<T>>
  //     : T extends any[]
  //     ? Flatten<UndefinedToNull<T>>
  //     : UndefinedToNull<T>
  //   : QueryMapper2<NonNullable<T>, WithArray> | null;

  // type QueryMapper<
  //   T,
  //   WithArray extends 'with_array' | 'without_array',
  //   NullableExpression = T
  // > = NullableExpression extends NonNullable<T>
  //   ? WithArray extends 'with_array'
  //     ? Flatten<UndefinedToNull<T>>
  //     : T extends any[]
  //     ? Flatten<UndefinedToNull<T>>
  //     : UndefinedToNull<T>
  //   : QueryMapper<NonNullable<T>, WithArray> | null;
}
