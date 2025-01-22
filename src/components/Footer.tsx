export const Footer = () => {
  return (
    <footer className="glass-card mt-auto py-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">MSG Records</h3>
            <p className="text-sm text-muted-foreground">
              Discover inspiring messages, heartfelt wishes, and meaningful quotes
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-muted-foreground hover:text-foreground">About</a></li>
              <li><a href="/terms" className="text-muted-foreground hover:text-foreground">Terms</a></li>
              <li><a href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-sm text-muted-foreground">
              Email: support@msgrecords.com<br />
         
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MSG Records. All rights reserved.
        </div>
      </div>
    </footer>
  );
};