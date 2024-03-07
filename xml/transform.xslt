<!-- transform.xslt -->

<!-- Define the output format as HTML -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes"/>

  <!-- Match the root element of the XML document -->
  <xsl:template match="/">
    <!-- Output the content of the Content element -->
    <xsl:value-of select="Module/Content"/>
  </xsl:template>

</xsl:stylesheet>
