from playwright.sync_api import sync_playwright

BASE = "http://localhost:3000"
OUT = r"C:\Projects\jkkniu-sdc\.impeccable\review"
PAGES = [
    ("home", "/"),
    ("about", "/about"),
    ("committee", "/committee"),
    ("events", "/events"),
    ("partners", "/partners"),
    ("membership", "/membership"),
    ("gallery", "/gallery"),
    ("blog", "/blog"),
    ("contact", "/contact"),
    ("login", "/login"),
]
VIEWPORTS = [("desktop", 1440, 900), ("mobile", 390, 844)]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    for label, width, height in VIEWPORTS:
        ctx = browser.new_context(viewport={"width": width, "height": height})
        page = ctx.new_page()
        for name, path in PAGES:
            page.goto(BASE + path, wait_until="networkidle", timeout=60000)
            page.wait_for_timeout(400)
            page.screenshot(path=rf"{OUT}\{name}-{label}.png", full_page=True)
            print(f"shot {name}-{label}")
        ctx.close()
    browser.close()
print("done")
