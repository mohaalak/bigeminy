// module Data.Nullable, generated by purescript-tsd-gen 0.3.0.0
import * as Data_Eq from "../Data.Eq";
import * as Data_Maybe from "../Data.Maybe";
import * as Data_Ord from "../Data.Ord";
import * as Data_Show from "../Data.Show";
export type /*builtin*/ Nullable<a0> = a0 | null;
declare const $$null: any /* type variable a */ | null;
export const notNull: <a>(_: a) => a | null;
export const toMaybe: <a>(_: a | null) => Data_Maybe.Maybe< a >;
export const toNullable: <a>(_: Data_Maybe.Maybe< a >) => a | null;
export const /*instance*/ showNullable: <a>(_: Data_Show.Show< a >) => Data_Show.Show< a | null >;
export const /*instance*/ eqNullable: <a>(_: Data_Eq.Eq< a >) => Data_Eq.Eq< a | null >;
export const /*instance*/ eq1Nullable: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Eq"}])) (ProperName {runProperName = "Eq1"}))) (TypeConstructor (SourceSpan {spanName = ".spago/nullable/v4.1.1/src/Data/Nullable.purs", spanStart = SourcePos {sourcePosLine = 70, sourcePosColumn = 29}, spanEnd = SourcePos {sourcePosLine = 70, sourcePosColumn = 37}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Nullable"}])) (ProperName {runProperName = "Nullable"}))) */;
export const /*instance*/ ordNullable: <a>(_: Data_Ord.Ord< a >) => Data_Ord.Ord< a | null >;
export const /*instance*/ ord1Nullable: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Ord"}])) (ProperName {runProperName = "Ord1"}))) (TypeConstructor (SourceSpan {spanName = ".spago/nullable/v4.1.1/src/Data/Nullable.purs", spanStart = SourcePos {sourcePosLine = 76, sourcePosColumn = 31}, spanEnd = SourcePos {sourcePosLine = 76, sourcePosColumn = 39}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Nullable"}])) (ProperName {runProperName = "Nullable"}))) */;
export /*value*/ { $$null as null };
