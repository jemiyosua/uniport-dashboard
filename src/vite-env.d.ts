/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Alamat API akses portal. Bawaan '/api' (lewat proxy dev server / reverse proxy yang sama). */
  readonly VITE_API_AKSES?: string;
  /** 'aktif' = portal hanya bisa dibuka lewat tautan terenkripsi (?akses=…). Selain itu: langsung portal Direksi. */
  readonly VITE_AKSES_TAUTAN?: string;
  /** 'dummy' = daftar wilayah/cabang/MO dari src/data/dummy.ts tanpa memanggil backend. Selain itu: API. */
  readonly VITE_SUMBER_DATA?: string;
  /** Alamat backend Go (Matrix). Bawaan '/api-go' (proxy ke URL_GO). */
  readonly VITE_API_GO?: string;
}
