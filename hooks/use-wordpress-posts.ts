"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import {
  fetchPostsClient,
  fetchCategoriesClient,
  type WPPost,
  type WPCategory,
  type PostsResponse,
} from "@/lib/wordpress"

// ─── usePosts ─────────────────────────────────────────────────────────────────

interface UsePostsOptions {
  perPage?: number
  initialPage?: number
}

interface UsePostsReturn {
  posts: WPPost[]
  total: number
  totalPages: number
  page: number
  setPage: (p: number) => void
  search: string
  setSearch: (s: string) => void
  categoryId: number
  setCategoryId: (id: number) => void
  loading: boolean
  error: string | null
  refresh: () => void
}

export function useWordPressPosts({
  perPage = 9,
  initialPage = 1,
}: UsePostsOptions = {}): UsePostsReturn {
  const [posts, setPosts] = useState<WPPost[]>([])
  const [total, setTotal] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(initialPage)
  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("")
  const [categoryId, setCategoryId] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  // Debounce search input 350ms
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search), 350)
    return () => clearTimeout(t)
  }, [search])

  // Reset to page 1 when search or category changes
  useEffect(() => {
    setPage(1)
  }, [debouncedSearch, categoryId])

  const fetchPosts = useCallback(async () => {
    if (abortRef.current) abortRef.current.abort()
    abortRef.current = new AbortController()

    setLoading(true)
    setError(null)

    try {
      const data: PostsResponse = await fetchPostsClient({
        page,
        perPage,
        search: debouncedSearch,
        categoryId: categoryId > 0 ? categoryId : undefined,
      })
      setPosts(data.posts)
      setTotal(data.total)
      setTotalPages(data.totalPages)
    } catch (err) {
      if ((err as Error).name !== "AbortError") {
        setError("Unable to load posts. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }, [page, perPage, debouncedSearch, categoryId])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return {
    posts,
    total,
    totalPages,
    page,
    setPage,
    search,
    setSearch,
    categoryId,
    setCategoryId,
    loading,
    error,
    refresh: fetchPosts,
  }
}

// ─── useCategories ────────────────────────────────────────────────────────────

export function useWordPressCategories() {
  const [categories, setCategories] = useState<WPCategory[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCategoriesClient()
      .then(setCategories)
      .catch(() => setCategories([]))
      .finally(() => setLoading(false))
  }, [])

  return { categories, loading }
}
