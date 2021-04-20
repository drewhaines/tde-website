import React from "react";
import { Box, Button } from "theme-ui";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = ({ language, value }) => {
  return (
    <Box
      sx={{
        textAlign: "right"
      }}
    >
      <Button
        sx={{
          "&:focus": {
            outline: "none"
          },
          "&:hover": {
            bg: "#dcdcdc"
          },
          bg: "#e6e6e6",
          color: "black",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          cursor: "pointer"
        }}
        onClick={() => {
          navigator.clipboard.writeText(value);
        }}
      >
        Copy
      </Button>
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        wrapLines={true}
        showLineNumbers={true}
      >
        {value}
      </SyntaxHighlighter>
    </Box>
  );
};

export default CodeBlock;
