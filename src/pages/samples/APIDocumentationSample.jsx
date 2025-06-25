import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export function APIDocumentationSample() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Button variant="outline" asChild className="mb-8">
        <Link to="/portfolio">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-6">API Reference for the QuantumFlow Data Platform</h1>
      <p className="text-muted-foreground text-lg mb-8">
        This sample provides a concise API reference for a hypothetical QuantumFlow Data Platform, demonstrating clear structure, essential information, and ease of use for developers.
      </p>

      <div className="prose prose-lg max-w-none">
        <h2>Introduction</h2>
        <p>
          The QuantumFlow Data Platform API provides programmatic access to your data, enabling seamless integration with your applications and workflows. This reference guide details the available endpoints, authentication methods, request/response formats, and error handling.
        </p>

        <h2>Authentication</h2>
        <p>
          All requests to the QuantumFlow API must be authenticated using an API Key. Your API Key should be included in the <code>Authorization</code> header as a Bearer token.
        </p>
        <pre><code className="language-http">Authorization: Bearer YOUR_API_KEY</code></pre>
        <p>
          You can generate and manage your API Keys from your QuantumFlow dashboard under 


<code>Settings &gt; API Keys</code>.
        </p>

        <h2>Endpoints</h2>

        <h3>1. Get All Datasets</h3>
        <p><code>GET /v1/datasets</code></p>
        <p>Retrieves a list of all datasets accessible by your API Key.</p>
        <h4>Parameters</h4>
        <ul>
          <li><code>limit</code> (optional, integer): Maximum number of datasets to return. Default is 100.</li>
          <li><code>offset</code> (optional, integer): Number of datasets to skip before starting to return results. Default is 0.</li>
        </ul>
        <h4>Example Request</h4>
        <pre><code className="language-bash">
curl -X GET \
  https://api.quantumflow.com/v1/datasets \
  -H "Authorization: Bearer YOUR_API_KEY"
        </code></pre>
        <h4>Example Response (200 OK)</h4>
        <pre><code className="language-json">&#123;
  "data": [
    &#123;
      "id": "dataset_abc123",
      "name": "Sales Data Q1 2024",
      "rows": 15000,
      "columns": 12,
      "created_at": "2024-01-15T10:00:00Z"
    &#125;,
    &#123;
      "id": "dataset_def456",
      "name": "Marketing Leads",
      "rows": 8000,
      "columns": 8,
      "created_at": "2024-02-01T14:30:00Z"
    &#125;
  ],
  "total": 2,
  "limit": 100,
  "offset": 0
&#125;</code></pre>

        <h3>2. Create New Dataset</h3>
        <p><code>POST /v1/datasets</code></p>
        <p>Creates a new dataset in your QuantumFlow account.</p>
        <h4>Parameters (Request Body)</h4>
        <ul>
          <li><code>name</code> (required, string): Name of the new dataset.</li>
          <li><code>description</code> (optional, string): Description of the dataset.</li>
          <li><code>schema</code> (required, array of objects): Defines the columns and their types.</li>
        </ul>
        <h4>Example Request</h4>
        <pre><code className="language-bash">
curl -X POST \
  https://api.quantumflow.com/v1/datasets \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d \
'&#123;
    "name": "New Customer Data",
    "description": "Customer information from recent sign-ups",
    "schema": [
      &#123;"name": "customer_id", "type": "string"&#125;,
      &#123;"name": "email", "type": "string"&#125;,
      &#123;"name": "signup_date", "type": "date"&#125;
    ]
&#125;'
        </code></pre>
        <h4>Example Response (201 Created)</h4>
        <pre><code className="language-json">&#123;
  "id": "dataset_ghi789",
  "name": "New Customer Data",
  "rows": 0,
  "columns": 3,
  "created_at": "2024-06-25T11:30:00Z"
&#125;</code></pre>

        <h2>Error Handling</h2>
        <p>
          The QuantumFlow API uses standard HTTP status codes to indicate the success or failure of an API request. In case of an error, the response body will contain a JSON object with an <code>error</code> field providing more details.
        </p>
        <h4>Common Error Codes</h4>
        <ul>
          <li><code>400 Bad Request</code>: The request was malformed or invalid.</li>
          <li><code>401 Unauthorized</code>: Missing or invalid API Key.</li>
          <li><code>404 Not Found</code>: The requested resource could not be found.</li>
          <li><code>500 Internal Server Error</code>: An unexpected error occurred on the server.</li>
        </ul>
        <h4>Example Error Response (400 Bad Request)</h4>
        <pre><code className="language-json">&#123;
  "error": &#123;
    "code": "invalid_parameter",
    "message": "The 'name' field is required for dataset creation."
  &#125;
&#125;</code></pre>

        <h2>Conclusion</h2>
        <p>
          This API documentation aims to provide developers with all the necessary information to seamlessly integrate with the QuantumFlow Data Platform. For further assistance, please refer to our support portal or contact our developer relations team.
        </p>
      </div>
    </div>
  )
}

