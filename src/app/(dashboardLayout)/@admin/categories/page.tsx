import { categoriesService } from '@/services/categories.service'


export default async function Categorypage() {
    const {data}=await categoriesService.getAllCategories()
    const categoryList=await data.json();
  return (
    <div className="space-y-4">
    <h2 className="text-lg font-semibold">Categories</h2>

    <div className="flex flex-wrap gap-3">
      {categoryList.map((category) => (
        <span
          key={category.id}
          className="rounded-full border px-4 py-2 text-sm hover:bg-muted transition"
        >
          {category.name}
        </span>
      ))}
    </div>

    <div>
        <h2 className="text-lg font-semibold">Create Categories</h2>
        
    </div>
  </div>
  )
}
