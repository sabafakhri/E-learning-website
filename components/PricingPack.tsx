    import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Tag } from "lucide-react"


const PricingPack = () => {
  
  return (
    <Card className="w-[300px] rounded-2xl border border-gray-200 shadow-sm">
      {/* Header */}
      <CardHeader className="flex flex-row items-center gap-2">
        <Tag className="h-5 w-5 text-purple-600" />
        <CardTitle className="text-xl font-bold text-gray-800">
          Basic Pack
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Features */}
        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-500 h-5 w-5" />
          <span>3 HD video lessons & tutorials</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-500 h-5 w-5" />
          <span>1 Official exam</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-500 h-5 w-5" />
          <span>100 Practice questions</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-500 h-5 w-5" />
          <span>1 Month subscriptions</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-500 h-5 w-5" />
          <span>1 Free book</span>
        </div>

        {/* Inactive Features */}
        <div className="flex items-center gap-3 text-gray-400">
          <XCircle className="text-red-300 h-5 w-5" />
          <span>Practice quizzes & assignments</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <XCircle className="text-red-300 h-5 w-5" />
          <span>In depth explanations</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <XCircle className="text-red-300 h-5 w-5" />
          <span>Personal instructor Assistance</span>
        </div>

        {/* Price */}
        <p className="text-2xl font-bold text-gray-900 mt-4">$200</p>
      </CardContent>

      <CardFooter>
        <Button
          variant="outline"
          className="w-full border border-purple-300 text-purple-600 hover:bg-purple-50"
        >
          Purchase Course
        </Button>
      </CardFooter>
    </Card>
  )
}

export default PricingPack
