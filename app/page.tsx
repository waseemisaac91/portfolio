"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Code,
  Database,
  Wrench,
  Brain,
  Users,
  Download,
  Menu,
  X,
  Github,
  ChevronDown,
  ChevronRight,
  User,
  Briefcase,
  FolderOpen,
} from "lucide-react";
import { translations } from "@/lib/translations";

export default function Portfolio() {
  const [currentLang, setCurrentLang] = useState<"en" | "nl">("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [uploadedCV, setUploadedCV] = useState<File | null>(null);

  const t = translations[currentLang];

  const languages = [
    { code: "en" as const, name: "English", flag: "🇺🇸" },
    { code: "nl" as const, name: "Nederlands", flag: "🇳🇱" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === currentLang);

  const handleLanguageChange = (langCode: "en" | "nl") => {
    setCurrentLang(langCode);
    setLangDropdownOpen(false);
  };

  const handleCVUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedCV(file);
    }
  };

  const downloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/open?id=1d0JSmT9gEV93hkrBB1u1JDktB7eMOn36&usp=drive_fs";
    link.download = "Waseem_Isaac_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = {
    programming: ["C#", "Java", "Python", "C++", "Dart", "PHP"],
    web: ["HTML", "CSS", "JavaScript", "React", "ASP.NET Core", "MVC"],
    databases: ["MySQL", "MSSQL", "Hana", "MongoDB"],
    frameworks: ["ASP.NET Core", "Flutter", "Django", "Nextjs"],
    tools: [
      "Visual Studio Code",
      "Visual Studio",
      "Android Studio",
      "Packet Tracer",
    ],
    ml: ["Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
    personal: [
      t.skills.problemSolving,
      t.skills.teamwork,
      t.skills.communication,
      t.skills.adaptability,
    ],
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 dark:bg-slate-900/80 dark:border-slate-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo/Branding */}
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">WI</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-800 dark:text-white">
                  Waseem Isaac
                </h1>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {t.title}
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-5">
              {["about", "skills", "experience", "projects", "contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors px-2 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    {t.nav[item as keyof typeof t.nav]}
                  </a>
                )
              )}
            </nav>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-3">
              {/* Language Dropdown */}
              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center space-x-1.5 min-w-[90px] justify-between"
                >
                  <div className="flex items-center space-x-1.5">
                    <span className="text-xs">{currentLanguage?.flag}</span>
                    <span className="text-xs font-medium">
                      {currentLanguage?.code.toUpperCase()}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      langDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>

                {langDropdownOpen && (
                  <div
                    className="absolute top-full right-0 mt-1 w-32 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-lg z-20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          handleLanguageChange(lang.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`
                    w-full text-left px-3 py-1.5 text-xs hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center space-x-2
                    ${
                      currentLang === lang.code
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                        : "text-slate-700 dark:text-slate-300"
                    }
                  `}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.code.toUpperCase()}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="outline"
                size="sm"
                className="md:hidden z-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-2 w-2 " />
                ) : (
                  <Menu className="h-3 w-2" />
                )}
                <span className="sr-only">
                  {mobileMenuOpen ? "Close menu" : "Open menu"}
                </span>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-40 md:hidden">
              {/* Overlay with fade animation */}
              <div
                className="absolute inset-0 bg-black/30  transition-opacity duration-300 ease-in-out"
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Menu with slide-in animation */}
              <nav className="absolute right-0 top-0 ">
                <div className="flex flex-col h-full  pt-20 px-2 space-y-2">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute top-3 right-4 p-2" // Added flex, items-center, justify-center
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5 " /> {/* Added inline-block */}
                  </button>

                  {/* Navigation items with icons */}
                  {[
                    { id: "about", icon: User, color: "text-blue-500" },
                    { id: "skills", icon: Code, color: "text-green-500" },
                    {
                      id: "experience",
                      icon: Briefcase,
                      color: "text-purple-500",
                    },
                    {
                      id: "projects",
                      icon: FolderOpen,
                      color: "text-orange-500",
                    },
                    { id: "contact", icon: Mail, color: "text-pink-500" },
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center  px-3 py-2   bg-black/80 rounded-xl text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/30 transition-all duration-200 group "
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className={`p-2 rounded-lg ${item.color} `}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <span className="text-blod font-lg flex-1 text-slate-50">
                        {t.nav[item.id as keyof typeof t.nav]}
                      </span>
                      <ChevronRight className="h-5 w-5 ml-2 bg-black text-white opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}

                  {/* Language selector for mobile 
                   <div className="mt-auto mb-6 px-2 py-3 bg-slate-100/30 dark:bg-slate-800/30 rounded-lg">
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2 px-2">
                      languages
                    </div>
                    <div className="flex gap-2">
                      {languages.map((lang) => (
                        <Button
                          key={lang.code}
                          variant={
                            currentLang === lang.code ? "default" : "outline"
                          }
                          size="sm"
                          className="text-xs h-8 px-3 flex-1"
                          onClick={() => handleLanguageChange(lang.code)}
                        >
                          <span className="mr-1">{lang.flag}</span>
                          {lang.name}
                        </Button>
                      ))}
                    </div>
                  </div>*/}

                  {/* Social links with subtle hover effects */}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="relative py-32 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            {/* Profile Image */}
            <div className="relative inline-block mb-8">
              <div className="w-40 h-40 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-full mx-auto flex items-center justify-center shadow-2xl ring-8 ring-white/50 backdrop-blur-sm">
                <span className="text-white font-bold text-5xl">WI</span>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-20 animate-pulse"></div>
            </div>

            {/* Name and Title */}
            <div className="space-y-4 mb-8">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
                Waseem Isaac
              </h1>
              <div className="relative">
                <p className="text-2xl md:text-3xl text-slate-600 font-medium">
                  {t.title}
                </p>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="text-slate-700 font-medium">
                  Venray, Netherlands
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
                <Phone className="h-4 w-4 text-green-600" />
                <span className="text-slate-700 font-medium">
                  +31-6 87986892
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
                <Mail className="h-4 w-4 text-purple-600" />
                <span className="text-slate-700 font-medium">
                  waseem.isaac.2016@gmail.com
                </span>
              </div>
            </div>

            {/* Summary */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                  {t.summary}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0"
                onClick={() =>
                  window.open(
                    "https://linkedin.com/in/engwaseemisaac",
                    "_blank"
                  )
                }
              >
                <Linkedin className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold text-lg">
                  {t.buttons.linkedin}
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open("https://github.com/waseemisaac91", "_blank")
                }
                className="group bg-white/80 backdrop-blur-sm hover:bg-white border-2 border-slate-300 hover:border-purple-400 text-slate-700 hover:text-purple-700 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Github className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold text-lg">
                  {t.buttons.github}
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={downloadCV}
                className="group bg-white/80 backdrop-blur-sm hover:bg-white border-2 border-slate-300 hover:border-blue-400 text-slate-700 hover:text-blue-700 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Download className="h-5 w-5 mr-3 group-hover:translate-y-1 transition-transform duration-300" />
                <span className="font-semibold text-lg">
                  {t.buttons.downloadCV}
                </span>
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce">
              <div className="w-6 h-10 border-2 border-slate-400 rounded-full mx-auto flex justify-center">
                <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            {t.nav.skills}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <Code className="h-5 w-5" />
                  {t.skills.programming}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <Globe className="h-5 w-5" />
                  {t.skills.web}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.web.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-600">
                  <Database className="h-5 w-5" />
                  {t.skills.databases}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  <Wrench className="h-5 w-5" />
                  {t.skills.frameworks}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <Brain className="h-5 w-5" />
                  {t.skills.machineLearning}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.ml.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-pink-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-pink-600">
                  <Users className="h-5 w-5" />
                  {t.skills.personal}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.personal.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-teal-600">
                  <Wrench className="h-5 w-5" />
                  {t.skills.tools}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            {t.nav.experience}
          </h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>{t.experience.technical.title}</CardTitle>
                <CardDescription>
                  {t.experience.technical.company} |{" "}
                  {t.experience.technical.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>{t.experience.technical.desc1}</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.experience.webDev.title}</CardTitle>
                <CardDescription>
                  {t.experience.webDev.company} | {t.experience.webDev.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>{t.experience.webDev.desc1}</li>
                  <li>{t.experience.webDev.desc2}</li>
                  <li>{t.experience.webDev.desc3}</li>
                  <li>{t.experience.webDev.desc4}</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.experience.itSupport.title}</CardTitle>
                <CardDescription>
                  {t.experience.itSupport.location} |{" "}
                  {t.experience.itSupport.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">{t.experience.itSupport.desc1}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.experience.mobile.title}</CardTitle>
                <CardDescription>
                  {t.experience.mobile.location} | {t.experience.mobile.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">{t.experience.mobile.desc1}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            {t.nav.projects}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            {t.education.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {t.education.title}
              </h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold">
                      {t.education.master1.degree}
                    </h4>
                    <p className="text-slate-600">
                      {t.education.master1.school}
                    </p>
                    <p className="text-sm text-slate-500">
                      {t.education.master1.period}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold">
                      {t.education.master2.degree}
                    </h4>
                    <p className="text-slate-600">
                      {t.education.master2.school}
                    </p>
                    <p className="text-sm text-slate-500">
                      {t.education.master2.period}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold">
                      {t.education.bachelor.degree}
                    </h4>
                    <p className="text-slate-600">
                      {t.education.bachelor.school}
                    </p>
                    <p className="text-sm text-slate-500">
                      {t.education.bachelor.period}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {t.certifications.title}
              </h3>
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold">
                    {t.certifications.csharp.title}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {t.certifications.csharp.year}
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-slate-800 mb-4 mt-8">
                {t.languages.title}
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                  <span>{t.languages.english.name}</span>
                  <Badge variant="secondary">{t.languages.english.level}</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                  <span>{t.languages.arabic.name}</span>
                  <Badge variant="secondary">{t.languages.arabic.level}</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                  <span>{t.languages.dutch.name}</span>
                  <Badge variant="secondary">{t.languages.dutch.level}</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
            {t.nav.contact}
          </h2>
          <p className="text-lg text-slate-600 mb-8">{t.contact.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() =>
                window.open("mailto:waseem.isaac.2016@gmail.com", "_blank")
              }
            >
              <Mail className="h-4 w-4 mr-2" />
              {t.contact.email}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open("https://linkedin.com/in/engwaseemisaac", "_blank")
              }
            >
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open("https://github.com/waseemisaac91", "_blank")
              }
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p>&copy; 2025 Waseem Isaac. {t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}
