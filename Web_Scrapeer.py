import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

# Base URL
BASE_URL = "https://www.sswcoe.edu.in"
visited = set()
routes = set()

# File extensions to exclude
EXCLUDED_EXTENSIONS = (
    '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.png', '.jpg', '.jpeg',
    '.gif', '.zip', '.rar', '.mp4', '.mp3', '.avi'
)

def is_internal(link):
    parsed = urlparse(link)
    return parsed.netloc == "" or parsed.netloc == urlparse(BASE_URL).netloc

def is_valid_page(path):
    return not path.endswith(EXCLUDED_EXTENSIONS)

def crawl(url):
    if url in visited:
        return
    visited.add(url)

    try:
        response = requests.get(url, timeout=5)
        soup = BeautifulSoup(response.content, "html.parser")

        for a_tag in soup.find_all("a", href=True):
            href = a_tag["href"]
            full_url = urljoin(BASE_URL, href)

            if is_internal(full_url):
                path = urlparse(full_url).path
                if is_valid_page(path) and path not in routes:
                    routes.add(path)
                    crawl(full_url)
    except Exception as e:
        print(f"Failed to crawl {url}: {e}")

# Start crawling
crawl(BASE_URL)

# Save to text file
with open("sswcoe_routes.txt", "w", encoding="utf-8") as f:
    for route in sorted(routes):
        f.write(route + "\n")

print(f"\n✅ Saved {len(routes)} unique HTML routes to 'sswcoe_routes.txt'")
