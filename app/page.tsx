import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/lib/blog-data"

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Blog</h2>
        <p className="text-xl text-muted-foreground">Sharing top of mind articles and thoughts</p>
      </section>

      <section className="space-y-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="transition-all hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>
                Published on <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {post.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">{paragraph}</p>
              ))}
            </CardContent>
            <CardFooter className="border-t pt-6">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-muted text-primary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  )
}
