<!-- transform.xslt -->

<!-- Define the output format as HTML -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes"/>

  <!-- Match the root element of the XML document -->
  <xsl:template match="/">
    <html>
      <head>
        <title>Module Content</title>
      </head>
      <body>
        <h1>Module Content</h1>
        <!-- Apply template for each Content element -->
        <xsl:apply-templates select="Module/Content"/>
      </body>
    </html>
  </xsl:template>

  <!-- Template to match each Content element -->
  <xsl:template match="Content">
    <!-- Extract HTML content from CDATA section -->
    <xsl:variable name="htmlContent" select="normalize-space(.)"/>
    <!-- Output the HTML content -->
    <xsl:copy-of select="$htmlContent"/>
  </xsl:template>
</xsl:stylesheet>
