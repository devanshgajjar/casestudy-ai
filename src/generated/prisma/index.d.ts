
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CaseStudy
 * 
 */
export type CaseStudy = $Result.DefaultSelection<Prisma.$CaseStudyPayload>
/**
 * Model MarketingContent
 * 
 */
export type MarketingContent = $Result.DefaultSelection<Prisma.$MarketingContentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.caseStudy`: Exposes CRUD operations for the **CaseStudy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CaseStudies
    * const caseStudies = await prisma.caseStudy.findMany()
    * ```
    */
  get caseStudy(): Prisma.CaseStudyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marketingContent`: Exposes CRUD operations for the **MarketingContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketingContents
    * const marketingContents = await prisma.marketingContent.findMany()
    * ```
    */
  get marketingContent(): Prisma.MarketingContentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.0
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    CaseStudy: 'CaseStudy',
    MarketingContent: 'MarketingContent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "caseStudy" | "marketingContent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CaseStudy: {
        payload: Prisma.$CaseStudyPayload<ExtArgs>
        fields: Prisma.CaseStudyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaseStudyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaseStudyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload>
          }
          findFirst: {
            args: Prisma.CaseStudyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaseStudyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload>
          }
          findMany: {
            args: Prisma.CaseStudyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload>[]
          }
          create: {
            args: Prisma.CaseStudyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload>
          }
          createMany: {
            args: Prisma.CaseStudyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaseStudyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload>[]
          }
          delete: {
            args: Prisma.CaseStudyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload>
          }
          update: {
            args: Prisma.CaseStudyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload>
          }
          deleteMany: {
            args: Prisma.CaseStudyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaseStudyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CaseStudyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload>[]
          }
          upsert: {
            args: Prisma.CaseStudyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload>
          }
          aggregate: {
            args: Prisma.CaseStudyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaseStudy>
          }
          groupBy: {
            args: Prisma.CaseStudyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaseStudyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaseStudyCountArgs<ExtArgs>
            result: $Utils.Optional<CaseStudyCountAggregateOutputType> | number
          }
        }
      }
      MarketingContent: {
        payload: Prisma.$MarketingContentPayload<ExtArgs>
        fields: Prisma.MarketingContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketingContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketingContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContentPayload>
          }
          findFirst: {
            args: Prisma.MarketingContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketingContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContentPayload>
          }
          findMany: {
            args: Prisma.MarketingContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContentPayload>[]
          }
          create: {
            args: Prisma.MarketingContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContentPayload>
          }
          createMany: {
            args: Prisma.MarketingContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketingContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContentPayload>[]
          }
          delete: {
            args: Prisma.MarketingContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContentPayload>
          }
          update: {
            args: Prisma.MarketingContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContentPayload>
          }
          deleteMany: {
            args: Prisma.MarketingContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketingContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketingContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContentPayload>[]
          }
          upsert: {
            args: Prisma.MarketingContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContentPayload>
          }
          aggregate: {
            args: Prisma.MarketingContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketingContent>
          }
          groupBy: {
            args: Prisma.MarketingContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketingContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketingContentCountArgs<ExtArgs>
            result: $Utils.Optional<MarketingContentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    caseStudy?: CaseStudyOmit
    marketingContent?: MarketingContentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    caseStudies: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caseStudies?: boolean | UserCountOutputTypeCountCaseStudiesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCaseStudiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseStudyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    passwordHash: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    caseStudies?: boolean | User$caseStudiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caseStudies?: boolean | User$caseStudiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      caseStudies: Prisma.$CaseStudyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      passwordHash: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caseStudies<T extends User$caseStudiesArgs<ExtArgs> = {}>(args?: Subset<T, User$caseStudiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.caseStudies
   */
  export type User$caseStudiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseStudyInclude<ExtArgs> | null
    where?: CaseStudyWhereInput
    orderBy?: CaseStudyOrderByWithRelationInput | CaseStudyOrderByWithRelationInput[]
    cursor?: CaseStudyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseStudyScalarFieldEnum | CaseStudyScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CaseStudy
   */

  export type AggregateCaseStudy = {
    _count: CaseStudyCountAggregateOutputType | null
    _min: CaseStudyMinAggregateOutputType | null
    _max: CaseStudyMaxAggregateOutputType | null
  }

  export type CaseStudyMinAggregateOutputType = {
    id: string | null
    title: string | null
    template: string | null
    status: string | null
    content: string | null
    answers: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type CaseStudyMaxAggregateOutputType = {
    id: string | null
    title: string | null
    template: string | null
    status: string | null
    content: string | null
    answers: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type CaseStudyCountAggregateOutputType = {
    id: number
    title: number
    template: number
    status: number
    content: number
    answers: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type CaseStudyMinAggregateInputType = {
    id?: true
    title?: true
    template?: true
    status?: true
    content?: true
    answers?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CaseStudyMaxAggregateInputType = {
    id?: true
    title?: true
    template?: true
    status?: true
    content?: true
    answers?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CaseStudyCountAggregateInputType = {
    id?: true
    title?: true
    template?: true
    status?: true
    content?: true
    answers?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type CaseStudyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaseStudy to aggregate.
     */
    where?: CaseStudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseStudies to fetch.
     */
    orderBy?: CaseStudyOrderByWithRelationInput | CaseStudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaseStudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseStudies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseStudies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CaseStudies
    **/
    _count?: true | CaseStudyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaseStudyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaseStudyMaxAggregateInputType
  }

  export type GetCaseStudyAggregateType<T extends CaseStudyAggregateArgs> = {
        [P in keyof T & keyof AggregateCaseStudy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaseStudy[P]>
      : GetScalarType<T[P], AggregateCaseStudy[P]>
  }




  export type CaseStudyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseStudyWhereInput
    orderBy?: CaseStudyOrderByWithAggregationInput | CaseStudyOrderByWithAggregationInput[]
    by: CaseStudyScalarFieldEnum[] | CaseStudyScalarFieldEnum
    having?: CaseStudyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaseStudyCountAggregateInputType | true
    _min?: CaseStudyMinAggregateInputType
    _max?: CaseStudyMaxAggregateInputType
  }

  export type CaseStudyGroupByOutputType = {
    id: string
    title: string
    template: string
    status: string
    content: string
    answers: string
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: CaseStudyCountAggregateOutputType | null
    _min: CaseStudyMinAggregateOutputType | null
    _max: CaseStudyMaxAggregateOutputType | null
  }

  type GetCaseStudyGroupByPayload<T extends CaseStudyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaseStudyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaseStudyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaseStudyGroupByOutputType[P]>
            : GetScalarType<T[P], CaseStudyGroupByOutputType[P]>
        }
      >
    >


  export type CaseStudySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    template?: boolean
    status?: boolean
    content?: boolean
    answers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caseStudy"]>

  export type CaseStudySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    template?: boolean
    status?: boolean
    content?: boolean
    answers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caseStudy"]>

  export type CaseStudySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    template?: boolean
    status?: boolean
    content?: boolean
    answers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caseStudy"]>

  export type CaseStudySelectScalar = {
    id?: boolean
    title?: boolean
    template?: boolean
    status?: boolean
    content?: boolean
    answers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type CaseStudyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "template" | "status" | "content" | "answers" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["caseStudy"]>
  export type CaseStudyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CaseStudyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CaseStudyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CaseStudyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CaseStudy"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      template: string
      status: string
      content: string
      answers: string
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["caseStudy"]>
    composites: {}
  }

  type CaseStudyGetPayload<S extends boolean | null | undefined | CaseStudyDefaultArgs> = $Result.GetResult<Prisma.$CaseStudyPayload, S>

  type CaseStudyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaseStudyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaseStudyCountAggregateInputType | true
    }

  export interface CaseStudyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CaseStudy'], meta: { name: 'CaseStudy' } }
    /**
     * Find zero or one CaseStudy that matches the filter.
     * @param {CaseStudyFindUniqueArgs} args - Arguments to find a CaseStudy
     * @example
     * // Get one CaseStudy
     * const caseStudy = await prisma.caseStudy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaseStudyFindUniqueArgs>(args: SelectSubset<T, CaseStudyFindUniqueArgs<ExtArgs>>): Prisma__CaseStudyClient<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CaseStudy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaseStudyFindUniqueOrThrowArgs} args - Arguments to find a CaseStudy
     * @example
     * // Get one CaseStudy
     * const caseStudy = await prisma.caseStudy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaseStudyFindUniqueOrThrowArgs>(args: SelectSubset<T, CaseStudyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaseStudyClient<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaseStudy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseStudyFindFirstArgs} args - Arguments to find a CaseStudy
     * @example
     * // Get one CaseStudy
     * const caseStudy = await prisma.caseStudy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaseStudyFindFirstArgs>(args?: SelectSubset<T, CaseStudyFindFirstArgs<ExtArgs>>): Prisma__CaseStudyClient<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaseStudy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseStudyFindFirstOrThrowArgs} args - Arguments to find a CaseStudy
     * @example
     * // Get one CaseStudy
     * const caseStudy = await prisma.caseStudy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaseStudyFindFirstOrThrowArgs>(args?: SelectSubset<T, CaseStudyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaseStudyClient<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CaseStudies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseStudyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CaseStudies
     * const caseStudies = await prisma.caseStudy.findMany()
     * 
     * // Get first 10 CaseStudies
     * const caseStudies = await prisma.caseStudy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caseStudyWithIdOnly = await prisma.caseStudy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaseStudyFindManyArgs>(args?: SelectSubset<T, CaseStudyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CaseStudy.
     * @param {CaseStudyCreateArgs} args - Arguments to create a CaseStudy.
     * @example
     * // Create one CaseStudy
     * const CaseStudy = await prisma.caseStudy.create({
     *   data: {
     *     // ... data to create a CaseStudy
     *   }
     * })
     * 
     */
    create<T extends CaseStudyCreateArgs>(args: SelectSubset<T, CaseStudyCreateArgs<ExtArgs>>): Prisma__CaseStudyClient<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CaseStudies.
     * @param {CaseStudyCreateManyArgs} args - Arguments to create many CaseStudies.
     * @example
     * // Create many CaseStudies
     * const caseStudy = await prisma.caseStudy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaseStudyCreateManyArgs>(args?: SelectSubset<T, CaseStudyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CaseStudies and returns the data saved in the database.
     * @param {CaseStudyCreateManyAndReturnArgs} args - Arguments to create many CaseStudies.
     * @example
     * // Create many CaseStudies
     * const caseStudy = await prisma.caseStudy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CaseStudies and only return the `id`
     * const caseStudyWithIdOnly = await prisma.caseStudy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaseStudyCreateManyAndReturnArgs>(args?: SelectSubset<T, CaseStudyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CaseStudy.
     * @param {CaseStudyDeleteArgs} args - Arguments to delete one CaseStudy.
     * @example
     * // Delete one CaseStudy
     * const CaseStudy = await prisma.caseStudy.delete({
     *   where: {
     *     // ... filter to delete one CaseStudy
     *   }
     * })
     * 
     */
    delete<T extends CaseStudyDeleteArgs>(args: SelectSubset<T, CaseStudyDeleteArgs<ExtArgs>>): Prisma__CaseStudyClient<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CaseStudy.
     * @param {CaseStudyUpdateArgs} args - Arguments to update one CaseStudy.
     * @example
     * // Update one CaseStudy
     * const caseStudy = await prisma.caseStudy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaseStudyUpdateArgs>(args: SelectSubset<T, CaseStudyUpdateArgs<ExtArgs>>): Prisma__CaseStudyClient<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CaseStudies.
     * @param {CaseStudyDeleteManyArgs} args - Arguments to filter CaseStudies to delete.
     * @example
     * // Delete a few CaseStudies
     * const { count } = await prisma.caseStudy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaseStudyDeleteManyArgs>(args?: SelectSubset<T, CaseStudyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaseStudies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseStudyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CaseStudies
     * const caseStudy = await prisma.caseStudy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaseStudyUpdateManyArgs>(args: SelectSubset<T, CaseStudyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaseStudies and returns the data updated in the database.
     * @param {CaseStudyUpdateManyAndReturnArgs} args - Arguments to update many CaseStudies.
     * @example
     * // Update many CaseStudies
     * const caseStudy = await prisma.caseStudy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CaseStudies and only return the `id`
     * const caseStudyWithIdOnly = await prisma.caseStudy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CaseStudyUpdateManyAndReturnArgs>(args: SelectSubset<T, CaseStudyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CaseStudy.
     * @param {CaseStudyUpsertArgs} args - Arguments to update or create a CaseStudy.
     * @example
     * // Update or create a CaseStudy
     * const caseStudy = await prisma.caseStudy.upsert({
     *   create: {
     *     // ... data to create a CaseStudy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CaseStudy we want to update
     *   }
     * })
     */
    upsert<T extends CaseStudyUpsertArgs>(args: SelectSubset<T, CaseStudyUpsertArgs<ExtArgs>>): Prisma__CaseStudyClient<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CaseStudies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseStudyCountArgs} args - Arguments to filter CaseStudies to count.
     * @example
     * // Count the number of CaseStudies
     * const count = await prisma.caseStudy.count({
     *   where: {
     *     // ... the filter for the CaseStudies we want to count
     *   }
     * })
    **/
    count<T extends CaseStudyCountArgs>(
      args?: Subset<T, CaseStudyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaseStudyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CaseStudy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseStudyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaseStudyAggregateArgs>(args: Subset<T, CaseStudyAggregateArgs>): Prisma.PrismaPromise<GetCaseStudyAggregateType<T>>

    /**
     * Group by CaseStudy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseStudyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CaseStudyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaseStudyGroupByArgs['orderBy'] }
        : { orderBy?: CaseStudyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaseStudyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaseStudyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CaseStudy model
   */
  readonly fields: CaseStudyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CaseStudy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaseStudyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CaseStudy model
   */
  interface CaseStudyFieldRefs {
    readonly id: FieldRef<"CaseStudy", 'String'>
    readonly title: FieldRef<"CaseStudy", 'String'>
    readonly template: FieldRef<"CaseStudy", 'String'>
    readonly status: FieldRef<"CaseStudy", 'String'>
    readonly content: FieldRef<"CaseStudy", 'String'>
    readonly answers: FieldRef<"CaseStudy", 'String'>
    readonly createdAt: FieldRef<"CaseStudy", 'DateTime'>
    readonly updatedAt: FieldRef<"CaseStudy", 'DateTime'>
    readonly userId: FieldRef<"CaseStudy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CaseStudy findUnique
   */
  export type CaseStudyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseStudyInclude<ExtArgs> | null
    /**
     * Filter, which CaseStudy to fetch.
     */
    where: CaseStudyWhereUniqueInput
  }

  /**
   * CaseStudy findUniqueOrThrow
   */
  export type CaseStudyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseStudyInclude<ExtArgs> | null
    /**
     * Filter, which CaseStudy to fetch.
     */
    where: CaseStudyWhereUniqueInput
  }

  /**
   * CaseStudy findFirst
   */
  export type CaseStudyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseStudyInclude<ExtArgs> | null
    /**
     * Filter, which CaseStudy to fetch.
     */
    where?: CaseStudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseStudies to fetch.
     */
    orderBy?: CaseStudyOrderByWithRelationInput | CaseStudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaseStudies.
     */
    cursor?: CaseStudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseStudies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseStudies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaseStudies.
     */
    distinct?: CaseStudyScalarFieldEnum | CaseStudyScalarFieldEnum[]
  }

  /**
   * CaseStudy findFirstOrThrow
   */
  export type CaseStudyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseStudyInclude<ExtArgs> | null
    /**
     * Filter, which CaseStudy to fetch.
     */
    where?: CaseStudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseStudies to fetch.
     */
    orderBy?: CaseStudyOrderByWithRelationInput | CaseStudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaseStudies.
     */
    cursor?: CaseStudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseStudies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseStudies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaseStudies.
     */
    distinct?: CaseStudyScalarFieldEnum | CaseStudyScalarFieldEnum[]
  }

  /**
   * CaseStudy findMany
   */
  export type CaseStudyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseStudyInclude<ExtArgs> | null
    /**
     * Filter, which CaseStudies to fetch.
     */
    where?: CaseStudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseStudies to fetch.
     */
    orderBy?: CaseStudyOrderByWithRelationInput | CaseStudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CaseStudies.
     */
    cursor?: CaseStudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseStudies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseStudies.
     */
    skip?: number
    distinct?: CaseStudyScalarFieldEnum | CaseStudyScalarFieldEnum[]
  }

  /**
   * CaseStudy create
   */
  export type CaseStudyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseStudyInclude<ExtArgs> | null
    /**
     * The data needed to create a CaseStudy.
     */
    data: XOR<CaseStudyCreateInput, CaseStudyUncheckedCreateInput>
  }

  /**
   * CaseStudy createMany
   */
  export type CaseStudyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CaseStudies.
     */
    data: CaseStudyCreateManyInput | CaseStudyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CaseStudy createManyAndReturn
   */
  export type CaseStudyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * The data used to create many CaseStudies.
     */
    data: CaseStudyCreateManyInput | CaseStudyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseStudyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CaseStudy update
   */
  export type CaseStudyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseStudyInclude<ExtArgs> | null
    /**
     * The data needed to update a CaseStudy.
     */
    data: XOR<CaseStudyUpdateInput, CaseStudyUncheckedUpdateInput>
    /**
     * Choose, which CaseStudy to update.
     */
    where: CaseStudyWhereUniqueInput
  }

  /**
   * CaseStudy updateMany
   */
  export type CaseStudyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CaseStudies.
     */
    data: XOR<CaseStudyUpdateManyMutationInput, CaseStudyUncheckedUpdateManyInput>
    /**
     * Filter which CaseStudies to update
     */
    where?: CaseStudyWhereInput
    /**
     * Limit how many CaseStudies to update.
     */
    limit?: number
  }

  /**
   * CaseStudy updateManyAndReturn
   */
  export type CaseStudyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * The data used to update CaseStudies.
     */
    data: XOR<CaseStudyUpdateManyMutationInput, CaseStudyUncheckedUpdateManyInput>
    /**
     * Filter which CaseStudies to update
     */
    where?: CaseStudyWhereInput
    /**
     * Limit how many CaseStudies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseStudyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CaseStudy upsert
   */
  export type CaseStudyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseStudyInclude<ExtArgs> | null
    /**
     * The filter to search for the CaseStudy to update in case it exists.
     */
    where: CaseStudyWhereUniqueInput
    /**
     * In case the CaseStudy found by the `where` argument doesn't exist, create a new CaseStudy with this data.
     */
    create: XOR<CaseStudyCreateInput, CaseStudyUncheckedCreateInput>
    /**
     * In case the CaseStudy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaseStudyUpdateInput, CaseStudyUncheckedUpdateInput>
  }

  /**
   * CaseStudy delete
   */
  export type CaseStudyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseStudyInclude<ExtArgs> | null
    /**
     * Filter which CaseStudy to delete.
     */
    where: CaseStudyWhereUniqueInput
  }

  /**
   * CaseStudy deleteMany
   */
  export type CaseStudyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaseStudies to delete
     */
    where?: CaseStudyWhereInput
    /**
     * Limit how many CaseStudies to delete.
     */
    limit?: number
  }

  /**
   * CaseStudy without action
   */
  export type CaseStudyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseStudyInclude<ExtArgs> | null
  }


  /**
   * Model MarketingContent
   */

  export type AggregateMarketingContent = {
    _count: MarketingContentCountAggregateOutputType | null
    _avg: MarketingContentAvgAggregateOutputType | null
    _sum: MarketingContentSumAggregateOutputType | null
    _min: MarketingContentMinAggregateOutputType | null
    _max: MarketingContentMaxAggregateOutputType | null
  }

  export type MarketingContentAvgAggregateOutputType = {
    caseStudyCount: number | null
  }

  export type MarketingContentSumAggregateOutputType = {
    caseStudyCount: number | null
  }

  export type MarketingContentMinAggregateOutputType = {
    id: string | null
    designer: string | null
    heroTitle: string | null
    heroSubtitle: string | null
    highlights: string | null
    tagline: string | null
    caseStudyCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarketingContentMaxAggregateOutputType = {
    id: string | null
    designer: string | null
    heroTitle: string | null
    heroSubtitle: string | null
    highlights: string | null
    tagline: string | null
    caseStudyCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarketingContentCountAggregateOutputType = {
    id: number
    designer: number
    heroTitle: number
    heroSubtitle: number
    highlights: number
    tagline: number
    caseStudyCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MarketingContentAvgAggregateInputType = {
    caseStudyCount?: true
  }

  export type MarketingContentSumAggregateInputType = {
    caseStudyCount?: true
  }

  export type MarketingContentMinAggregateInputType = {
    id?: true
    designer?: true
    heroTitle?: true
    heroSubtitle?: true
    highlights?: true
    tagline?: true
    caseStudyCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarketingContentMaxAggregateInputType = {
    id?: true
    designer?: true
    heroTitle?: true
    heroSubtitle?: true
    highlights?: true
    tagline?: true
    caseStudyCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarketingContentCountAggregateInputType = {
    id?: true
    designer?: true
    heroTitle?: true
    heroSubtitle?: true
    highlights?: true
    tagline?: true
    caseStudyCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MarketingContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketingContent to aggregate.
     */
    where?: MarketingContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingContents to fetch.
     */
    orderBy?: MarketingContentOrderByWithRelationInput | MarketingContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketingContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketingContents
    **/
    _count?: true | MarketingContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketingContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketingContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketingContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketingContentMaxAggregateInputType
  }

  export type GetMarketingContentAggregateType<T extends MarketingContentAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketingContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketingContent[P]>
      : GetScalarType<T[P], AggregateMarketingContent[P]>
  }




  export type MarketingContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketingContentWhereInput
    orderBy?: MarketingContentOrderByWithAggregationInput | MarketingContentOrderByWithAggregationInput[]
    by: MarketingContentScalarFieldEnum[] | MarketingContentScalarFieldEnum
    having?: MarketingContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketingContentCountAggregateInputType | true
    _avg?: MarketingContentAvgAggregateInputType
    _sum?: MarketingContentSumAggregateInputType
    _min?: MarketingContentMinAggregateInputType
    _max?: MarketingContentMaxAggregateInputType
  }

  export type MarketingContentGroupByOutputType = {
    id: string
    designer: string
    heroTitle: string
    heroSubtitle: string
    highlights: string
    tagline: string
    caseStudyCount: number
    createdAt: Date
    updatedAt: Date
    _count: MarketingContentCountAggregateOutputType | null
    _avg: MarketingContentAvgAggregateOutputType | null
    _sum: MarketingContentSumAggregateOutputType | null
    _min: MarketingContentMinAggregateOutputType | null
    _max: MarketingContentMaxAggregateOutputType | null
  }

  type GetMarketingContentGroupByPayload<T extends MarketingContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketingContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketingContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketingContentGroupByOutputType[P]>
            : GetScalarType<T[P], MarketingContentGroupByOutputType[P]>
        }
      >
    >


  export type MarketingContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    designer?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    highlights?: boolean
    tagline?: boolean
    caseStudyCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["marketingContent"]>

  export type MarketingContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    designer?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    highlights?: boolean
    tagline?: boolean
    caseStudyCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["marketingContent"]>

  export type MarketingContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    designer?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    highlights?: boolean
    tagline?: boolean
    caseStudyCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["marketingContent"]>

  export type MarketingContentSelectScalar = {
    id?: boolean
    designer?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    highlights?: boolean
    tagline?: boolean
    caseStudyCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MarketingContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "designer" | "heroTitle" | "heroSubtitle" | "highlights" | "tagline" | "caseStudyCount" | "createdAt" | "updatedAt", ExtArgs["result"]["marketingContent"]>

  export type $MarketingContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketingContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      designer: string
      heroTitle: string
      heroSubtitle: string
      highlights: string
      tagline: string
      caseStudyCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["marketingContent"]>
    composites: {}
  }

  type MarketingContentGetPayload<S extends boolean | null | undefined | MarketingContentDefaultArgs> = $Result.GetResult<Prisma.$MarketingContentPayload, S>

  type MarketingContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketingContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketingContentCountAggregateInputType | true
    }

  export interface MarketingContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketingContent'], meta: { name: 'MarketingContent' } }
    /**
     * Find zero or one MarketingContent that matches the filter.
     * @param {MarketingContentFindUniqueArgs} args - Arguments to find a MarketingContent
     * @example
     * // Get one MarketingContent
     * const marketingContent = await prisma.marketingContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketingContentFindUniqueArgs>(args: SelectSubset<T, MarketingContentFindUniqueArgs<ExtArgs>>): Prisma__MarketingContentClient<$Result.GetResult<Prisma.$MarketingContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarketingContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketingContentFindUniqueOrThrowArgs} args - Arguments to find a MarketingContent
     * @example
     * // Get one MarketingContent
     * const marketingContent = await prisma.marketingContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketingContentFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketingContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketingContentClient<$Result.GetResult<Prisma.$MarketingContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketingContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingContentFindFirstArgs} args - Arguments to find a MarketingContent
     * @example
     * // Get one MarketingContent
     * const marketingContent = await prisma.marketingContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketingContentFindFirstArgs>(args?: SelectSubset<T, MarketingContentFindFirstArgs<ExtArgs>>): Prisma__MarketingContentClient<$Result.GetResult<Prisma.$MarketingContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketingContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingContentFindFirstOrThrowArgs} args - Arguments to find a MarketingContent
     * @example
     * // Get one MarketingContent
     * const marketingContent = await prisma.marketingContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketingContentFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketingContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketingContentClient<$Result.GetResult<Prisma.$MarketingContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarketingContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketingContents
     * const marketingContents = await prisma.marketingContent.findMany()
     * 
     * // Get first 10 MarketingContents
     * const marketingContents = await prisma.marketingContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketingContentWithIdOnly = await prisma.marketingContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketingContentFindManyArgs>(args?: SelectSubset<T, MarketingContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarketingContent.
     * @param {MarketingContentCreateArgs} args - Arguments to create a MarketingContent.
     * @example
     * // Create one MarketingContent
     * const MarketingContent = await prisma.marketingContent.create({
     *   data: {
     *     // ... data to create a MarketingContent
     *   }
     * })
     * 
     */
    create<T extends MarketingContentCreateArgs>(args: SelectSubset<T, MarketingContentCreateArgs<ExtArgs>>): Prisma__MarketingContentClient<$Result.GetResult<Prisma.$MarketingContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarketingContents.
     * @param {MarketingContentCreateManyArgs} args - Arguments to create many MarketingContents.
     * @example
     * // Create many MarketingContents
     * const marketingContent = await prisma.marketingContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketingContentCreateManyArgs>(args?: SelectSubset<T, MarketingContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketingContents and returns the data saved in the database.
     * @param {MarketingContentCreateManyAndReturnArgs} args - Arguments to create many MarketingContents.
     * @example
     * // Create many MarketingContents
     * const marketingContent = await prisma.marketingContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketingContents and only return the `id`
     * const marketingContentWithIdOnly = await prisma.marketingContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketingContentCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketingContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarketingContent.
     * @param {MarketingContentDeleteArgs} args - Arguments to delete one MarketingContent.
     * @example
     * // Delete one MarketingContent
     * const MarketingContent = await prisma.marketingContent.delete({
     *   where: {
     *     // ... filter to delete one MarketingContent
     *   }
     * })
     * 
     */
    delete<T extends MarketingContentDeleteArgs>(args: SelectSubset<T, MarketingContentDeleteArgs<ExtArgs>>): Prisma__MarketingContentClient<$Result.GetResult<Prisma.$MarketingContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarketingContent.
     * @param {MarketingContentUpdateArgs} args - Arguments to update one MarketingContent.
     * @example
     * // Update one MarketingContent
     * const marketingContent = await prisma.marketingContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketingContentUpdateArgs>(args: SelectSubset<T, MarketingContentUpdateArgs<ExtArgs>>): Prisma__MarketingContentClient<$Result.GetResult<Prisma.$MarketingContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarketingContents.
     * @param {MarketingContentDeleteManyArgs} args - Arguments to filter MarketingContents to delete.
     * @example
     * // Delete a few MarketingContents
     * const { count } = await prisma.marketingContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketingContentDeleteManyArgs>(args?: SelectSubset<T, MarketingContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketingContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketingContents
     * const marketingContent = await prisma.marketingContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketingContentUpdateManyArgs>(args: SelectSubset<T, MarketingContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketingContents and returns the data updated in the database.
     * @param {MarketingContentUpdateManyAndReturnArgs} args - Arguments to update many MarketingContents.
     * @example
     * // Update many MarketingContents
     * const marketingContent = await prisma.marketingContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarketingContents and only return the `id`
     * const marketingContentWithIdOnly = await prisma.marketingContent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarketingContentUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketingContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarketingContent.
     * @param {MarketingContentUpsertArgs} args - Arguments to update or create a MarketingContent.
     * @example
     * // Update or create a MarketingContent
     * const marketingContent = await prisma.marketingContent.upsert({
     *   create: {
     *     // ... data to create a MarketingContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketingContent we want to update
     *   }
     * })
     */
    upsert<T extends MarketingContentUpsertArgs>(args: SelectSubset<T, MarketingContentUpsertArgs<ExtArgs>>): Prisma__MarketingContentClient<$Result.GetResult<Prisma.$MarketingContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarketingContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingContentCountArgs} args - Arguments to filter MarketingContents to count.
     * @example
     * // Count the number of MarketingContents
     * const count = await prisma.marketingContent.count({
     *   where: {
     *     // ... the filter for the MarketingContents we want to count
     *   }
     * })
    **/
    count<T extends MarketingContentCountArgs>(
      args?: Subset<T, MarketingContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketingContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketingContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarketingContentAggregateArgs>(args: Subset<T, MarketingContentAggregateArgs>): Prisma.PrismaPromise<GetMarketingContentAggregateType<T>>

    /**
     * Group by MarketingContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarketingContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketingContentGroupByArgs['orderBy'] }
        : { orderBy?: MarketingContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarketingContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketingContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketingContent model
   */
  readonly fields: MarketingContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketingContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketingContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MarketingContent model
   */
  interface MarketingContentFieldRefs {
    readonly id: FieldRef<"MarketingContent", 'String'>
    readonly designer: FieldRef<"MarketingContent", 'String'>
    readonly heroTitle: FieldRef<"MarketingContent", 'String'>
    readonly heroSubtitle: FieldRef<"MarketingContent", 'String'>
    readonly highlights: FieldRef<"MarketingContent", 'String'>
    readonly tagline: FieldRef<"MarketingContent", 'String'>
    readonly caseStudyCount: FieldRef<"MarketingContent", 'Int'>
    readonly createdAt: FieldRef<"MarketingContent", 'DateTime'>
    readonly updatedAt: FieldRef<"MarketingContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarketingContent findUnique
   */
  export type MarketingContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContent
     */
    select?: MarketingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContent
     */
    omit?: MarketingContentOmit<ExtArgs> | null
    /**
     * Filter, which MarketingContent to fetch.
     */
    where: MarketingContentWhereUniqueInput
  }

  /**
   * MarketingContent findUniqueOrThrow
   */
  export type MarketingContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContent
     */
    select?: MarketingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContent
     */
    omit?: MarketingContentOmit<ExtArgs> | null
    /**
     * Filter, which MarketingContent to fetch.
     */
    where: MarketingContentWhereUniqueInput
  }

  /**
   * MarketingContent findFirst
   */
  export type MarketingContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContent
     */
    select?: MarketingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContent
     */
    omit?: MarketingContentOmit<ExtArgs> | null
    /**
     * Filter, which MarketingContent to fetch.
     */
    where?: MarketingContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingContents to fetch.
     */
    orderBy?: MarketingContentOrderByWithRelationInput | MarketingContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketingContents.
     */
    cursor?: MarketingContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketingContents.
     */
    distinct?: MarketingContentScalarFieldEnum | MarketingContentScalarFieldEnum[]
  }

  /**
   * MarketingContent findFirstOrThrow
   */
  export type MarketingContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContent
     */
    select?: MarketingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContent
     */
    omit?: MarketingContentOmit<ExtArgs> | null
    /**
     * Filter, which MarketingContent to fetch.
     */
    where?: MarketingContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingContents to fetch.
     */
    orderBy?: MarketingContentOrderByWithRelationInput | MarketingContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketingContents.
     */
    cursor?: MarketingContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketingContents.
     */
    distinct?: MarketingContentScalarFieldEnum | MarketingContentScalarFieldEnum[]
  }

  /**
   * MarketingContent findMany
   */
  export type MarketingContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContent
     */
    select?: MarketingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContent
     */
    omit?: MarketingContentOmit<ExtArgs> | null
    /**
     * Filter, which MarketingContents to fetch.
     */
    where?: MarketingContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingContents to fetch.
     */
    orderBy?: MarketingContentOrderByWithRelationInput | MarketingContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketingContents.
     */
    cursor?: MarketingContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingContents.
     */
    skip?: number
    distinct?: MarketingContentScalarFieldEnum | MarketingContentScalarFieldEnum[]
  }

  /**
   * MarketingContent create
   */
  export type MarketingContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContent
     */
    select?: MarketingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContent
     */
    omit?: MarketingContentOmit<ExtArgs> | null
    /**
     * The data needed to create a MarketingContent.
     */
    data: XOR<MarketingContentCreateInput, MarketingContentUncheckedCreateInput>
  }

  /**
   * MarketingContent createMany
   */
  export type MarketingContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketingContents.
     */
    data: MarketingContentCreateManyInput | MarketingContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketingContent createManyAndReturn
   */
  export type MarketingContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContent
     */
    select?: MarketingContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContent
     */
    omit?: MarketingContentOmit<ExtArgs> | null
    /**
     * The data used to create many MarketingContents.
     */
    data: MarketingContentCreateManyInput | MarketingContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketingContent update
   */
  export type MarketingContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContent
     */
    select?: MarketingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContent
     */
    omit?: MarketingContentOmit<ExtArgs> | null
    /**
     * The data needed to update a MarketingContent.
     */
    data: XOR<MarketingContentUpdateInput, MarketingContentUncheckedUpdateInput>
    /**
     * Choose, which MarketingContent to update.
     */
    where: MarketingContentWhereUniqueInput
  }

  /**
   * MarketingContent updateMany
   */
  export type MarketingContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketingContents.
     */
    data: XOR<MarketingContentUpdateManyMutationInput, MarketingContentUncheckedUpdateManyInput>
    /**
     * Filter which MarketingContents to update
     */
    where?: MarketingContentWhereInput
    /**
     * Limit how many MarketingContents to update.
     */
    limit?: number
  }

  /**
   * MarketingContent updateManyAndReturn
   */
  export type MarketingContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContent
     */
    select?: MarketingContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContent
     */
    omit?: MarketingContentOmit<ExtArgs> | null
    /**
     * The data used to update MarketingContents.
     */
    data: XOR<MarketingContentUpdateManyMutationInput, MarketingContentUncheckedUpdateManyInput>
    /**
     * Filter which MarketingContents to update
     */
    where?: MarketingContentWhereInput
    /**
     * Limit how many MarketingContents to update.
     */
    limit?: number
  }

  /**
   * MarketingContent upsert
   */
  export type MarketingContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContent
     */
    select?: MarketingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContent
     */
    omit?: MarketingContentOmit<ExtArgs> | null
    /**
     * The filter to search for the MarketingContent to update in case it exists.
     */
    where: MarketingContentWhereUniqueInput
    /**
     * In case the MarketingContent found by the `where` argument doesn't exist, create a new MarketingContent with this data.
     */
    create: XOR<MarketingContentCreateInput, MarketingContentUncheckedCreateInput>
    /**
     * In case the MarketingContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketingContentUpdateInput, MarketingContentUncheckedUpdateInput>
  }

  /**
   * MarketingContent delete
   */
  export type MarketingContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContent
     */
    select?: MarketingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContent
     */
    omit?: MarketingContentOmit<ExtArgs> | null
    /**
     * Filter which MarketingContent to delete.
     */
    where: MarketingContentWhereUniqueInput
  }

  /**
   * MarketingContent deleteMany
   */
  export type MarketingContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketingContents to delete
     */
    where?: MarketingContentWhereInput
    /**
     * Limit how many MarketingContents to delete.
     */
    limit?: number
  }

  /**
   * MarketingContent without action
   */
  export type MarketingContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContent
     */
    select?: MarketingContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContent
     */
    omit?: MarketingContentOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CaseStudyScalarFieldEnum: {
    id: 'id',
    title: 'title',
    template: 'template',
    status: 'status',
    content: 'content',
    answers: 'answers',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type CaseStudyScalarFieldEnum = (typeof CaseStudyScalarFieldEnum)[keyof typeof CaseStudyScalarFieldEnum]


  export const MarketingContentScalarFieldEnum: {
    id: 'id',
    designer: 'designer',
    heroTitle: 'heroTitle',
    heroSubtitle: 'heroSubtitle',
    highlights: 'highlights',
    tagline: 'tagline',
    caseStudyCount: 'caseStudyCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MarketingContentScalarFieldEnum = (typeof MarketingContentScalarFieldEnum)[keyof typeof MarketingContentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    caseStudies?: CaseStudyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    caseStudies?: CaseStudyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    caseStudies?: CaseStudyListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CaseStudyWhereInput = {
    AND?: CaseStudyWhereInput | CaseStudyWhereInput[]
    OR?: CaseStudyWhereInput[]
    NOT?: CaseStudyWhereInput | CaseStudyWhereInput[]
    id?: StringFilter<"CaseStudy"> | string
    title?: StringFilter<"CaseStudy"> | string
    template?: StringFilter<"CaseStudy"> | string
    status?: StringFilter<"CaseStudy"> | string
    content?: StringFilter<"CaseStudy"> | string
    answers?: StringFilter<"CaseStudy"> | string
    createdAt?: DateTimeFilter<"CaseStudy"> | Date | string
    updatedAt?: DateTimeFilter<"CaseStudy"> | Date | string
    userId?: StringFilter<"CaseStudy"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CaseStudyOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    template?: SortOrder
    status?: SortOrder
    content?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CaseStudyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CaseStudyWhereInput | CaseStudyWhereInput[]
    OR?: CaseStudyWhereInput[]
    NOT?: CaseStudyWhereInput | CaseStudyWhereInput[]
    title?: StringFilter<"CaseStudy"> | string
    template?: StringFilter<"CaseStudy"> | string
    status?: StringFilter<"CaseStudy"> | string
    content?: StringFilter<"CaseStudy"> | string
    answers?: StringFilter<"CaseStudy"> | string
    createdAt?: DateTimeFilter<"CaseStudy"> | Date | string
    updatedAt?: DateTimeFilter<"CaseStudy"> | Date | string
    userId?: StringFilter<"CaseStudy"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CaseStudyOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    template?: SortOrder
    status?: SortOrder
    content?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: CaseStudyCountOrderByAggregateInput
    _max?: CaseStudyMaxOrderByAggregateInput
    _min?: CaseStudyMinOrderByAggregateInput
  }

  export type CaseStudyScalarWhereWithAggregatesInput = {
    AND?: CaseStudyScalarWhereWithAggregatesInput | CaseStudyScalarWhereWithAggregatesInput[]
    OR?: CaseStudyScalarWhereWithAggregatesInput[]
    NOT?: CaseStudyScalarWhereWithAggregatesInput | CaseStudyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CaseStudy"> | string
    title?: StringWithAggregatesFilter<"CaseStudy"> | string
    template?: StringWithAggregatesFilter<"CaseStudy"> | string
    status?: StringWithAggregatesFilter<"CaseStudy"> | string
    content?: StringWithAggregatesFilter<"CaseStudy"> | string
    answers?: StringWithAggregatesFilter<"CaseStudy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CaseStudy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CaseStudy"> | Date | string
    userId?: StringWithAggregatesFilter<"CaseStudy"> | string
  }

  export type MarketingContentWhereInput = {
    AND?: MarketingContentWhereInput | MarketingContentWhereInput[]
    OR?: MarketingContentWhereInput[]
    NOT?: MarketingContentWhereInput | MarketingContentWhereInput[]
    id?: StringFilter<"MarketingContent"> | string
    designer?: StringFilter<"MarketingContent"> | string
    heroTitle?: StringFilter<"MarketingContent"> | string
    heroSubtitle?: StringFilter<"MarketingContent"> | string
    highlights?: StringFilter<"MarketingContent"> | string
    tagline?: StringFilter<"MarketingContent"> | string
    caseStudyCount?: IntFilter<"MarketingContent"> | number
    createdAt?: DateTimeFilter<"MarketingContent"> | Date | string
    updatedAt?: DateTimeFilter<"MarketingContent"> | Date | string
  }

  export type MarketingContentOrderByWithRelationInput = {
    id?: SortOrder
    designer?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    highlights?: SortOrder
    tagline?: SortOrder
    caseStudyCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketingContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    designer?: string
    AND?: MarketingContentWhereInput | MarketingContentWhereInput[]
    OR?: MarketingContentWhereInput[]
    NOT?: MarketingContentWhereInput | MarketingContentWhereInput[]
    heroTitle?: StringFilter<"MarketingContent"> | string
    heroSubtitle?: StringFilter<"MarketingContent"> | string
    highlights?: StringFilter<"MarketingContent"> | string
    tagline?: StringFilter<"MarketingContent"> | string
    caseStudyCount?: IntFilter<"MarketingContent"> | number
    createdAt?: DateTimeFilter<"MarketingContent"> | Date | string
    updatedAt?: DateTimeFilter<"MarketingContent"> | Date | string
  }, "id" | "designer">

  export type MarketingContentOrderByWithAggregationInput = {
    id?: SortOrder
    designer?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    highlights?: SortOrder
    tagline?: SortOrder
    caseStudyCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MarketingContentCountOrderByAggregateInput
    _avg?: MarketingContentAvgOrderByAggregateInput
    _max?: MarketingContentMaxOrderByAggregateInput
    _min?: MarketingContentMinOrderByAggregateInput
    _sum?: MarketingContentSumOrderByAggregateInput
  }

  export type MarketingContentScalarWhereWithAggregatesInput = {
    AND?: MarketingContentScalarWhereWithAggregatesInput | MarketingContentScalarWhereWithAggregatesInput[]
    OR?: MarketingContentScalarWhereWithAggregatesInput[]
    NOT?: MarketingContentScalarWhereWithAggregatesInput | MarketingContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarketingContent"> | string
    designer?: StringWithAggregatesFilter<"MarketingContent"> | string
    heroTitle?: StringWithAggregatesFilter<"MarketingContent"> | string
    heroSubtitle?: StringWithAggregatesFilter<"MarketingContent"> | string
    highlights?: StringWithAggregatesFilter<"MarketingContent"> | string
    tagline?: StringWithAggregatesFilter<"MarketingContent"> | string
    caseStudyCount?: IntWithAggregatesFilter<"MarketingContent"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MarketingContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MarketingContent"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    caseStudies?: CaseStudyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    caseStudies?: CaseStudyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseStudies?: CaseStudyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caseStudies?: CaseStudyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseStudyCreateInput = {
    id?: string
    title: string
    template: string
    status?: string
    content?: string
    answers?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCaseStudiesInput
  }

  export type CaseStudyUncheckedCreateInput = {
    id?: string
    title: string
    template: string
    status?: string
    content?: string
    answers?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type CaseStudyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCaseStudiesNestedInput
  }

  export type CaseStudyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CaseStudyCreateManyInput = {
    id?: string
    title: string
    template: string
    status?: string
    content?: string
    answers?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type CaseStudyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseStudyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MarketingContentCreateInput = {
    id?: string
    designer: string
    heroTitle: string
    heroSubtitle: string
    highlights: string
    tagline: string
    caseStudyCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketingContentUncheckedCreateInput = {
    id?: string
    designer: string
    heroTitle: string
    heroSubtitle: string
    highlights: string
    tagline: string
    caseStudyCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketingContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    designer?: StringFieldUpdateOperationsInput | string
    heroTitle?: StringFieldUpdateOperationsInput | string
    heroSubtitle?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    caseStudyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    designer?: StringFieldUpdateOperationsInput | string
    heroTitle?: StringFieldUpdateOperationsInput | string
    heroSubtitle?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    caseStudyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingContentCreateManyInput = {
    id?: string
    designer: string
    heroTitle: string
    heroSubtitle: string
    highlights: string
    tagline: string
    caseStudyCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketingContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    designer?: StringFieldUpdateOperationsInput | string
    heroTitle?: StringFieldUpdateOperationsInput | string
    heroSubtitle?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    caseStudyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    designer?: StringFieldUpdateOperationsInput | string
    heroTitle?: StringFieldUpdateOperationsInput | string
    heroSubtitle?: StringFieldUpdateOperationsInput | string
    highlights?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    caseStudyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CaseStudyListRelationFilter = {
    every?: CaseStudyWhereInput
    some?: CaseStudyWhereInput
    none?: CaseStudyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CaseStudyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CaseStudyCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    template?: SortOrder
    status?: SortOrder
    content?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CaseStudyMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    template?: SortOrder
    status?: SortOrder
    content?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CaseStudyMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    template?: SortOrder
    status?: SortOrder
    content?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MarketingContentCountOrderByAggregateInput = {
    id?: SortOrder
    designer?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    highlights?: SortOrder
    tagline?: SortOrder
    caseStudyCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketingContentAvgOrderByAggregateInput = {
    caseStudyCount?: SortOrder
  }

  export type MarketingContentMaxOrderByAggregateInput = {
    id?: SortOrder
    designer?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    highlights?: SortOrder
    tagline?: SortOrder
    caseStudyCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketingContentMinOrderByAggregateInput = {
    id?: SortOrder
    designer?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    highlights?: SortOrder
    tagline?: SortOrder
    caseStudyCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketingContentSumOrderByAggregateInput = {
    caseStudyCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CaseStudyCreateNestedManyWithoutUserInput = {
    create?: XOR<CaseStudyCreateWithoutUserInput, CaseStudyUncheckedCreateWithoutUserInput> | CaseStudyCreateWithoutUserInput[] | CaseStudyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CaseStudyCreateOrConnectWithoutUserInput | CaseStudyCreateOrConnectWithoutUserInput[]
    createMany?: CaseStudyCreateManyUserInputEnvelope
    connect?: CaseStudyWhereUniqueInput | CaseStudyWhereUniqueInput[]
  }

  export type CaseStudyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CaseStudyCreateWithoutUserInput, CaseStudyUncheckedCreateWithoutUserInput> | CaseStudyCreateWithoutUserInput[] | CaseStudyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CaseStudyCreateOrConnectWithoutUserInput | CaseStudyCreateOrConnectWithoutUserInput[]
    createMany?: CaseStudyCreateManyUserInputEnvelope
    connect?: CaseStudyWhereUniqueInput | CaseStudyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CaseStudyUpdateManyWithoutUserNestedInput = {
    create?: XOR<CaseStudyCreateWithoutUserInput, CaseStudyUncheckedCreateWithoutUserInput> | CaseStudyCreateWithoutUserInput[] | CaseStudyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CaseStudyCreateOrConnectWithoutUserInput | CaseStudyCreateOrConnectWithoutUserInput[]
    upsert?: CaseStudyUpsertWithWhereUniqueWithoutUserInput | CaseStudyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CaseStudyCreateManyUserInputEnvelope
    set?: CaseStudyWhereUniqueInput | CaseStudyWhereUniqueInput[]
    disconnect?: CaseStudyWhereUniqueInput | CaseStudyWhereUniqueInput[]
    delete?: CaseStudyWhereUniqueInput | CaseStudyWhereUniqueInput[]
    connect?: CaseStudyWhereUniqueInput | CaseStudyWhereUniqueInput[]
    update?: CaseStudyUpdateWithWhereUniqueWithoutUserInput | CaseStudyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CaseStudyUpdateManyWithWhereWithoutUserInput | CaseStudyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CaseStudyScalarWhereInput | CaseStudyScalarWhereInput[]
  }

  export type CaseStudyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CaseStudyCreateWithoutUserInput, CaseStudyUncheckedCreateWithoutUserInput> | CaseStudyCreateWithoutUserInput[] | CaseStudyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CaseStudyCreateOrConnectWithoutUserInput | CaseStudyCreateOrConnectWithoutUserInput[]
    upsert?: CaseStudyUpsertWithWhereUniqueWithoutUserInput | CaseStudyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CaseStudyCreateManyUserInputEnvelope
    set?: CaseStudyWhereUniqueInput | CaseStudyWhereUniqueInput[]
    disconnect?: CaseStudyWhereUniqueInput | CaseStudyWhereUniqueInput[]
    delete?: CaseStudyWhereUniqueInput | CaseStudyWhereUniqueInput[]
    connect?: CaseStudyWhereUniqueInput | CaseStudyWhereUniqueInput[]
    update?: CaseStudyUpdateWithWhereUniqueWithoutUserInput | CaseStudyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CaseStudyUpdateManyWithWhereWithoutUserInput | CaseStudyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CaseStudyScalarWhereInput | CaseStudyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCaseStudiesInput = {
    create?: XOR<UserCreateWithoutCaseStudiesInput, UserUncheckedCreateWithoutCaseStudiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCaseStudiesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCaseStudiesNestedInput = {
    create?: XOR<UserCreateWithoutCaseStudiesInput, UserUncheckedCreateWithoutCaseStudiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCaseStudiesInput
    upsert?: UserUpsertWithoutCaseStudiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCaseStudiesInput, UserUpdateWithoutCaseStudiesInput>, UserUncheckedUpdateWithoutCaseStudiesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CaseStudyCreateWithoutUserInput = {
    id?: string
    title: string
    template: string
    status?: string
    content?: string
    answers?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaseStudyUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    template: string
    status?: string
    content?: string
    answers?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaseStudyCreateOrConnectWithoutUserInput = {
    where: CaseStudyWhereUniqueInput
    create: XOR<CaseStudyCreateWithoutUserInput, CaseStudyUncheckedCreateWithoutUserInput>
  }

  export type CaseStudyCreateManyUserInputEnvelope = {
    data: CaseStudyCreateManyUserInput | CaseStudyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CaseStudyUpsertWithWhereUniqueWithoutUserInput = {
    where: CaseStudyWhereUniqueInput
    update: XOR<CaseStudyUpdateWithoutUserInput, CaseStudyUncheckedUpdateWithoutUserInput>
    create: XOR<CaseStudyCreateWithoutUserInput, CaseStudyUncheckedCreateWithoutUserInput>
  }

  export type CaseStudyUpdateWithWhereUniqueWithoutUserInput = {
    where: CaseStudyWhereUniqueInput
    data: XOR<CaseStudyUpdateWithoutUserInput, CaseStudyUncheckedUpdateWithoutUserInput>
  }

  export type CaseStudyUpdateManyWithWhereWithoutUserInput = {
    where: CaseStudyScalarWhereInput
    data: XOR<CaseStudyUpdateManyMutationInput, CaseStudyUncheckedUpdateManyWithoutUserInput>
  }

  export type CaseStudyScalarWhereInput = {
    AND?: CaseStudyScalarWhereInput | CaseStudyScalarWhereInput[]
    OR?: CaseStudyScalarWhereInput[]
    NOT?: CaseStudyScalarWhereInput | CaseStudyScalarWhereInput[]
    id?: StringFilter<"CaseStudy"> | string
    title?: StringFilter<"CaseStudy"> | string
    template?: StringFilter<"CaseStudy"> | string
    status?: StringFilter<"CaseStudy"> | string
    content?: StringFilter<"CaseStudy"> | string
    answers?: StringFilter<"CaseStudy"> | string
    createdAt?: DateTimeFilter<"CaseStudy"> | Date | string
    updatedAt?: DateTimeFilter<"CaseStudy"> | Date | string
    userId?: StringFilter<"CaseStudy"> | string
  }

  export type UserCreateWithoutCaseStudiesInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutCaseStudiesInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutCaseStudiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCaseStudiesInput, UserUncheckedCreateWithoutCaseStudiesInput>
  }

  export type UserUpsertWithoutCaseStudiesInput = {
    update: XOR<UserUpdateWithoutCaseStudiesInput, UserUncheckedUpdateWithoutCaseStudiesInput>
    create: XOR<UserCreateWithoutCaseStudiesInput, UserUncheckedCreateWithoutCaseStudiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCaseStudiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCaseStudiesInput, UserUncheckedUpdateWithoutCaseStudiesInput>
  }

  export type UserUpdateWithoutCaseStudiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutCaseStudiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseStudyCreateManyUserInput = {
    id?: string
    title: string
    template: string
    status?: string
    content?: string
    answers?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaseStudyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseStudyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseStudyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}